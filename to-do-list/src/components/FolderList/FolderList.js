import FolderCard from "../FolderCard/FolderCard";

function FolderList({ dossiers, deleteFolder }) {
  if (dossiers.length === 0) {
    return <p>Aucun dossier à afficher.</p>;
  }

  return dossiers.map((dossier) => (
    <FolderCard
      key={dossier.id}
      dossier={dossier}
      deleteFolder={deleteFolder}
    />
  ));
}

export default FolderList;