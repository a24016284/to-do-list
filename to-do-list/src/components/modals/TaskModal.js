import { ETATS } from "../../constants/taskConstants";
import './Modals.css'

function TaskModal({
  showModal,
  newTask,
  setNewTask,
  dossiers,
  toggleNewTaskFolder,
  handleCreateTask,
  resetTaskForm,
  setShowModal,
}) {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Créer une tâche</h2>

        <form onSubmit={handleCreateTask}>
          <label>Intitulé</label>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) =>
              setNewTask({ ...newTask, title: e.target.value })
            }
          />

          <label>Description</label>
          <textarea
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />

          <label>Date d'échéance</label>
          <input
            type="date"
            value={newTask.date_echeance}
            onChange={(e) =>
              setNewTask({ ...newTask, date_echeance: e.target.value })
            }
          />

          <label>Statut</label>
          <select
            value={newTask.etat}
            onChange={(e) =>
              setNewTask({ ...newTask, etat: e.target.value })
            }
          >
            {ETATS.map((etat) => (
              <option key={etat} value={etat}>
                {etat}
              </option>
            ))}
          </select>

          <label>Equipiers (séparés par des virgules)</label>
          <input
            type="text"
            value={newTask.equipiers}
            onChange={(e) =>
              setNewTask({ ...newTask, equipiers: e.target.value })
            }
          />

          <label>Dossiers</label>
          <div className="badges">
            {dossiers.map((dossier) => (
              <button
                key={dossier.id}
                type="button"
                className={
                  newTask.folderIds.includes(dossier.id)
                    ? "badge-button active"
                    : "badge-button"
                }
                onClick={() => toggleNewTaskFolder(dossier.id)}
              >
                {dossier.title}
              </button>
            ))}
          </div>

          <div className="modal-actions">
            <button type="submit">Créer</button>
            <button
              type="button"
              onClick={() => {
                resetTaskForm();
                setShowModal(false);
              }}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;