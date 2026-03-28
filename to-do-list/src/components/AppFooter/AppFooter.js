
function AppFooter({ mode, setShowModal, setShowFolderModal }) {
  return (
    <footer className="footer">
      {mode === "tasks" && (
        <button className="fab" onClick={() => setShowModal(true)}>
          +
        </button>
      )}

      {mode === "folders" && (
        <button
          className="folder-add-button"
          onClick={() => setShowFolderModal(true)}
        >
          + Dossier
        </button>
      )}
    </footer>
  );


}

export default AppFooter;