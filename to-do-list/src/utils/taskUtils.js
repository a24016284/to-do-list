export function getNextId(items) {
  return items.length > 0
    ? Math.max(...items.map((item) => item.id)) + 1
    : 1;
}

export function parseEquipiers(equipiersString) {
  return equipiersString
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name !== "")
    .map((name) => ({ name }));
}

export function buildTaskWithFolders(data) {
  return data.taches.map((tache) => {
    const dossierIds = data.relations
      .filter((relation) => relation.tache === tache.id)
      .map((relation) => relation.dossier);

    const dossiers = data.dossiers.filter((dossier) =>
      dossierIds.includes(dossier.id)
    );

    return {
      ...tache,
      dossiers,
      equipiers: tache.equipiers || [],
    };
  });
}

export function countNonFinishedTasks(taches, etatsTermines) {
  return taches.filter((tache) => !etatsTermines.includes(tache.etat)).length;
}

export function sortTasks(tasks, sortBy) {
  const sortedTasks = [...tasks];

  sortedTasks.sort((a, b) => {
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "date_creation") {
      return new Date(b.date_creation) - new Date(a.date_creation);
    }

    return new Date(b.date_echeance) - new Date(a.date_echeance);
  });

  return sortedTasks;
}

export function filterTasks(
  tasks,
  onlyInProgress,
  selectedEtats,
  selectedFolders,
  etatsTermines
) {
  let filteredTasks = [...tasks];

  if (onlyInProgress) {
    filteredTasks = filteredTasks.filter(
      (tache) => !etatsTermines.includes(tache.etat)
    );
  }

  if (selectedEtats.length > 0) {
    filteredTasks = filteredTasks.filter((tache) =>
      selectedEtats.includes(tache.etat)
    );
  }

  if (selectedFolders.length > 0) {
    filteredTasks = filteredTasks.filter((tache) =>
      tache.dossiers.some((dossier) => selectedFolders.includes(dossier.id))
    );
  }

  return filteredTasks;
}

export function buildCreatedTask(newTask, nextId) {
  return {
    id: nextId,
    title: newTask.title,
    description: newTask.description,
    date_creation: new Date().toISOString().split("T")[0],
    date_echeance: newTask.date_echeance,
    etat: newTask.etat,
    equipiers: parseEquipiers(newTask.equipiers),
  };
}

export function buildTaskRelations(taskId, folderIds) {
  return folderIds.map((folderId) => ({
    tache: taskId,
    dossier: folderId,
  }));
}

export function buildCreatedFolder(newFolder, nextId) {
  return {
    id: nextId,
    title: newFolder.title,
    description: newFolder.description,
    color: newFolder.color,
    icon: newFolder.icon,
  };
}