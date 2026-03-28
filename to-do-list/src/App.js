import "./App.css";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import TaskModal from "./components/modals/TaskModal";
import FolderModal from "./components/modals/FolderModal";
import TaskList from "./components/TaskList/TaskList";
import FolderList from "./components/FolderList/FolderList";
import AppFooter from "./components/AppFooter/AppFooter";
import useTodoApp from "./hooks/useTodoApp";

function App() {
  const {
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
  } = useTodoApp();

  return (
    <div className="app">
      <Header
        mode={mode}
        setMode={setMode}
        totalTasks={data.taches.length}
        nonFinishedCount={nonFinishedCount}
        handleReloadBackup={handleReloadBackup}
        handleResetToZero={handleResetToZero}
        statsByEtat={statsByEtat}
      />

      <main>
        {mode === "tasks" && (
          <>
            <Toolbar
              sortBy={sortBy}
              setSortBy={setSortBy}
              onlyInProgress={onlyInProgress}
              setOnlyInProgress={setOnlyInProgress}
              selectedEtats={selectedEtats}
              toggleEtat={toggleEtat}
              selectedFolders={selectedFolders}
              toggleFolder={toggleFolder}
              dossiers={data.dossiers}
            />

            <h2>Liste des tâches</h2>

            <TaskList
              visibleTasks={visibleTasks}
              expandedTasks={expandedTasks}
              editingTaskId={editingTaskId}
              editTask={editTask}
              setEditTask={setEditTask}
              toggleExpandedTask={toggleExpandedTask}
              startEditTask={startEditTask}
              saveEditTask={saveEditTask}
              cancelEditTask={cancelEditTask}
            />
          </>
        )}

        {mode === "folders" && (
          <>
            <h2>Liste des dossiers</h2>
            <FolderList
              dossiers={data.dossiers}
              deleteFolder={deleteFolder}
            />
          </>
        )}
      </main>

      <AppFooter
        mode={mode}
        setShowModal={setShowModal}
        setShowFolderModal={setShowFolderModal}
      />

      <TaskModal
        showModal={showModal}
        newTask={newTask}
        setNewTask={setNewTask}
        dossiers={data.dossiers}
        toggleNewTaskFolder={toggleNewTaskFolder}
        handleCreateTask={handleCreateTask}
        resetTaskForm={resetTaskForm}
        setShowModal={setShowModal}
      />

      <FolderModal
        showFolderModal={showFolderModal}
        newFolder={newFolder}
        setNewFolder={setNewFolder}
        handleCreateFolder={handleCreateFolder}
        resetFolderForm={resetFolderForm}
        setShowFolderModal={setShowFolderModal}
      />
    </div>
  );
}

export default App;