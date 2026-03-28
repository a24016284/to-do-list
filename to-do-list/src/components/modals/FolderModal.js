import { COLORS } from "../../constants/taskConstants";
import './Modals.css'

function FolderModal({
  showFolderModal,
  newFolder,
  setNewFolder,
  handleCreateFolder,
  resetFolderForm,
  setShowFolderModal,
}) {
  if (!showFolderModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Créer un dossier</h2>

        <form onSubmit={handleCreateFolder}>
          <label>Intitulé</label>
          <input
            type="text"
            value={newFolder.title}
            onChange={(e) =>
              setNewFolder({ ...newFolder, title: e.target.value })
            }
          />

          <label>Description</label>
          <textarea
            value={newFolder.description}
            onChange={(e) =>
              setNewFolder({ ...newFolder, description: e.target.value })
            }
          />

          <label>Couleur</label>
          <select
            value={newFolder.color}
            onChange={(e) =>
              setNewFolder({ ...newFolder, color: e.target.value })
            }
          >
            {COLORS.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>

          <label>Pictogramme (optionnel)</label>
          <input
            type="text"
            value={newFolder.icon}
            onChange={(e) =>
              setNewFolder({ ...newFolder, icon: e.target.value })
            }
          />

          <div className="modal-actions">
            <button type="submit">Créer</button>
            <button
              type="button"
              onClick={() => {
                resetFolderForm();
                setShowFolderModal(false);
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

export default FolderModal;