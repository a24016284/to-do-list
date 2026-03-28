import './TaskCard.css';

function TaskCard({
  tache,
  isExpanded,
  isEditing,
  editTask,
  setEditTask,
  toggleExpandedTask,
  startEditTask,
  saveEditTask,
  cancelEditTask,
}) {
  return (
    <div className="task-card">
      <div className="task-header">
        <div>
          {!isEditing ? (
            <>
              <h3>{tache.title}</h3>
              <p>Date d'échéance : {tache.date_echeance}</p>
              <p>État : {tache.etat}</p>
            </>
          ) : (
            <div className="edit-zone">
              <label>Intitulé</label>
              <input
                type="text"
                value={editTask.title}
                onChange={(e) =>
                  setEditTask({ ...editTask, title: e.target.value })
                }
              />

              <label>Description</label>
              <textarea
                value={editTask.description}
                onChange={(e) =>
                  setEditTask({
                    ...editTask,
                    description: e.target.value,
                  })
                }
              />

              <label>Date d'échéance</label>
              <input
                type="date"
                value={editTask.date_echeance}
                onChange={(e) =>
                  setEditTask({
                    ...editTask,
                    date_echeance: e.target.value,
                  })
                }
              />
            </div>
          )}
        </div>

        <button
          className="toggle-button"
          onClick={() => toggleExpandedTask(tache.id)}
        >
          {isExpanded ? "▲" : "▼"}
        </button>
      </div>

      {!isExpanded && !isEditing && (
        <div className="folder-zone">
          <strong>Dossiers :</strong>
          {tache.dossiers.length > 0 ? (
            <div className="badges">
              {}
              {tache.dossiers.slice(0, 2).map((dossier) => (
                <span key={dossier.id} className={`badge ${dossier.color}`}>
                  {dossier.title}
                </span>
              ))}
              {tache.dossiers.length > 2 && <span className="badge-more">+{tache.dossiers.length - 2}</span>}
            </div>
          ) : (
            <span> Aucun dossier</span>
          )}
        </div>
      )}

      {isExpanded && (
        <div className="task-details">
          {!isEditing ? (
            <>
              <p>Description : {tache.description || "Aucune description"}</p>
              <p>Date de création : {tache.date_creation}</p>

              <div className="folder-zone">
                <strong>Tous les dossiers :</strong>
                {tache.dossiers.length > 0 ? (
                  <div className="badges">
                    {}
                    {tache.dossiers.map((dossier) => (
                      <span key={dossier.id} className={`badge ${dossier.color}`}>
                        {dossier.title}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span> Aucun dossier</span>
                )}
              </div>

              <p>
                Equipiers :{" "}
                {tache.equipiers.length > 0
                  ? tache.equipiers.map((equipier) => equipier.name).join(", ")
                  : "Aucun équipier"}
              </p>

              <button type="button" onClick={() => startEditTask(tache)}>
                Modifier
              </button>
            </>
          ) : (
            <div className="edit-actions">
              <button type="button" onClick={saveEditTask}>
                Enregistrer
              </button>
              <button type="button" onClick={cancelEditTask}>
                Annuler
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TaskCard;