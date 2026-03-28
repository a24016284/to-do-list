export function updateEditedTask(prevData, editingTaskId, editTask) {
  return {
    ...prevData,
    taches: prevData.taches.map((tache) =>
      tache.id === editingTaskId
        ? {
            ...tache,
            title: editTask.title,
            description: editTask.description,
            date_echeance: editTask.date_echeance,
          }
        : tache
    ),
  };
}

export function addTaskToData(prevData, createdTask, newRelations) {
  return {
    ...prevData,
    taches: [...prevData.taches, createdTask],
    relations: [...prevData.relations, ...newRelations],
  };
}

export function addFolderToData(prevData, createdFolder) {
  return {
    ...prevData,
    dossiers: [...prevData.dossiers, createdFolder],
  };
}

export function removeFolderFromData(prevData, folderId) {
  return {
    ...prevData,
    dossiers: prevData.dossiers.filter((dossier) => dossier.id !== folderId),
    relations: prevData.relations.filter(
      (relation) => relation.dossier !== folderId
    ),
  };
}