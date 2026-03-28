import TaskCard from "../TaskCard/TaskCard";

function TaskList({
  visibleTasks,
  expandedTasks,
  editingTaskId,
  editTask,
  setEditTask,
  toggleExpandedTask,
  startEditTask,
  saveEditTask,
  cancelEditTask,
}) {
  if (visibleTasks.length === 0) {
    return <p>Aucune tâche à afficher.</p>;
  }

  return visibleTasks.map((tache) => {
    const isExpanded = expandedTasks.includes(tache.id);
    const isEditing = editingTaskId === tache.id;

    return (
      <TaskCard
        key={tache.id}
        tache={tache}
        isExpanded={isExpanded}
        isEditing={isEditing}
        editTask={editTask}
        setEditTask={setEditTask}
        toggleExpandedTask={toggleExpandedTask}
        startEditTask={startEditTask}
        saveEditTask={saveEditTask}
        cancelEditTask={cancelEditTask}
      />
    );
  });
}

export default TaskList;