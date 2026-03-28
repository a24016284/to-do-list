import './FolderCard.css';

function FolderCard({ dossier, deleteFolder }) {
  return (
    <div className={`folder-card ${dossier.color}`}>
      <div>
        <h3>{dossier.title}</h3>
        <p><strong>Description :</strong> {dossier.description || "Aucune description"}</p>
        <p><strong>Icône :</strong> {dossier.icon || "Aucune"}</p>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => deleteFolder(dossier.id)}
      >
        Supprimer
      </button>
    </div>
  );
}

export default FolderCard;