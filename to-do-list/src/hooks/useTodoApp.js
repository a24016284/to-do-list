import { useMemo, useState } from "react";
import backup from "../data/backup.json";
import { ETATS_TERMINES } from "../constants/taskConstants";
import {
  DEFAULT_EDIT_TASK,
  DEFAULT_NEW_TASK,
  DEFAULT_NEW_FOLDER,
  EMPTY_DATA,
} from "../constants/defaultValues";
import {
  getNextId,
  buildTaskWithFolders,
  countNonFinishedTasks,
  sortTasks,
  filterTasks,
  buildCreatedTask,
  buildTaskRelations,
  buildCreatedFolder,
} from "../utils/taskUtils";
import {
  updateEditedTask,
  addTaskToData,
  addFolderToData,
  removeFolderFromData,
} from "../utils/todoActions";

function useTodoApp() {
  const [data, setData] = useState(backup);
  const [mode, setMode] = useState("tasks");
  const [sortBy, setSortBy] = useState("date_echeance");
  const [onlyInProgress, setOnlyInProgress] = useState(true);
  const [selectedEtats, setSelectedEtats] = useState([]);
  const [selectedFolders, setSelectedFolders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [expandedTasks, setExpandedTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTask, setEditTask] = useState(DEFAULT_EDIT_TASK);
  const [newTask, setNewTask] = useState(DEFAULT_NEW_TASK);
  const [newFolder, setNewFolder] = useState(DEFAULT_NEW_FOLDER);

  // Calcul des statistiques pour le camembert
  const statsByEtat = useMemo(() => {
    const counts = data.taches.reduce((acc, tache) => {
      acc[tache.etat] = (acc[tache.etat] || 0) + 1;
      return acc;
    }, {});

    const colorMap = {
      "Nouveau": "#ccccff",
      "En attente": "#ffffcc",
      "Réussi": "#ccffcc",
      "Abandonné": "#ffcccb"
    };

    return Object.keys(counts).map(etat => ({
      title: etat,
      value: counts[etat],
      color: colorMap[etat] || "#d7ccc8"
    }));
  }, [data.taches]);

  const tasksWithFolders = useMemo(() => {
    return buildTaskWithFolders(data);
  }, [data]);

  const nonFinishedCount = useMemo(() => {
    return countNonFinishedTasks(data.taches, ETATS_TERMINES);
  }, [data]);

  const visibleTasks = useMemo(() => {
    const filteredTasks = filterTasks(
      tasksWithFolders,
      onlyInProgress,
      selectedEtats,
      selectedFolders,
      ETATS_TERMINES
    );

    return sortTasks(filteredTasks, sortBy);
  }, [tasksWithFolders, onlyInProgress, selectedEtats, selectedFolders, sortBy]);

  const toggleEtat = (etat) => {
    setSelectedEtats((prev) =>
      prev.includes(etat)
        ? prev.filter((item) => item !== etat)
        : [...prev, etat]
    );
  };

  const toggleFolder = (folderId) => {
    setSelectedFolders((prev) =>
      prev.includes(folderId)
        ? prev.filter((item) => item !== folderId)
        : [...prev, folderId]
    );
  };

  const toggleNewTaskFolder = (folderId) => {
    setNewTask((prev) => ({
      ...prev,
      folderIds: prev.folderIds.includes(folderId)
        ? prev.folderIds.filter((id) => id !== folderId)
        : [...prev.folderIds, folderId],
    }));
  };

  const toggleExpandedTask = (taskId) => {
    setExpandedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  const startEditTask = (tache) => {
    setEditingTaskId(tache.id);
    setEditTask({
      title: tache.title,
      description: tache.description || "",
      date_echeance: tache.date_echeance,
    });
  };

  const cancelEditTask = () => {
    setEditingTaskId(null);
    setEditTask(DEFAULT_EDIT_TASK);
  };

  const saveEditTask = () => {
    if (editTask.title.trim().length < 5) {
      alert("Le titre doit contenir au moins 5 caractères.");
      return;
    }
    if (!editTask.date_echeance) {
      alert("La date d'échéance est obligatoire.");
      return;
    }
    setData((prev) => updateEditedTask(prev, editingTaskId, editTask));
    cancelEditTask();
  };

  const resetTaskForm = () => setNewTask(DEFAULT_NEW_TASK);
  const resetFolderForm = () => setNewFolder(DEFAULT_NEW_FOLDER);

  const resetFilters = () => {
    setMode("tasks");
    setSortBy("date_echeance");
    setOnlyInProgress(true);
    setSelectedEtats([]);
    setSelectedFolders([]);
    setExpandedTasks([]);
    setEditingTaskId(null);
    setShowModal(false);
    setShowFolderModal(false);
    resetTaskForm();
    resetFolderForm();
  };

  const handleReloadBackup = () => {
    setData(backup);
    resetFilters();
  };

  const handleResetToZero = () => {
    if (!window.confirm("Êtes-vous sûr(e) de vouloir repartir de zéro ?")) return;
    setData(EMPTY_DATA);
    resetFilters();
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (newTask.title.trim().length < 5) {
      alert("Le titre doit contenir au moins 5 caractères.");
      return;
    }
    if (!newTask.date_echeance) {
      alert("La date d'échéance est obligatoire.");
      return;
    }
    const nextId = getNextId(data.taches);
    const createdTask = buildCreatedTask(newTask, nextId);
    const newRelations = buildTaskRelations(nextId, newTask.folderIds);
    setData((prev) => addTaskToData(prev, createdTask, newRelations));
    resetTaskForm();
    setShowModal(false);
  };

  const handleCreateFolder = (e) => {
    e.preventDefault();
    if (newFolder.title.trim().length < 3) {
      alert("Le titre du dossier doit contenir au moins 3 caractères.");
      return;
    }
    const nextId = getNextId(data.dossiers);
    const createdFolder = buildCreatedFolder(newFolder, nextId);
    setData((prev) => addFolderToData(prev, createdFolder));
    resetFolderForm();
    setShowFolderModal(false);
  };

  const deleteFolder = (folderId) => {
    setData((prev) => removeFolderFromData(prev, folderId));
  };

  return {
    data,
    mode,
    setMode,
    sortBy,
    setSortBy,
    onlyInProgress,
    setOnlyInProgress,
    selectedEtats,
    selectedFolders,
    showModal,
    setShowModal,
    showFolderModal,
    setShowFolderModal,
    expandedTasks,
    editingTaskId,
    editTask,
    setEditTask,
    newTask,
    setNewTask,
    newFolder,
    setNewFolder,
    nonFinishedCount,
    visibleTasks,
    statsByEtat,
    toggleEtat,
    toggleFolder,
    toggleNewTaskFolder,
    toggleExpandedTask,
    startEditTask,
    cancelEditTask,
    saveEditTask,
    resetTaskForm,
    resetFolderForm,
    handleReloadBackup,
    handleResetToZero,
    handleCreateTask,
    handleCreateFolder,
    deleteFolder,
  };
}

export default useTodoApp;