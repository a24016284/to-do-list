import { ETATS } from "../../constants/taskConstants";
import './Toolbar.css'

function Toolbar({
  sortBy,
  setSortBy,
  onlyInProgress,
  setOnlyInProgress,
  selectedEtats,
  toggleEtat,
  selectedFolders,
  toggleFolder,
  dossiers,
}) {
  return (
    <section className="toolbar">
      <div className="toolbar-block">
        <label htmlFor="sort-select">Trier par : </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date_echeance">Date échéance</option>
          <option value="date_creation">Date création</option>
          <option value="name">Nom</option>
        </select>
      </div>

      <div className="toolbar-block">
        <label>
          <input
            type="checkbox"
            checked={onlyInProgress}
            onChange={() => setOnlyInProgress(!onlyInProgress)}
          />
          En cours (filtre actif par défaut)
        </label>
      </div>

      <div className="toolbar-block">
        <p>Filtrer par état :</p>
        <div className="badges">
          {ETATS.map((etat) => (
            <button
              key={etat}
              type="button"
              className={
                selectedEtats.includes(etat)
                  ? "badge-button active"
                  : "badge-button"
              }
              onClick={() => toggleEtat(etat)}
            >
              {etat}
            </button>
          ))}
        </div>
      </div>

      <div className="toolbar-block">
        <p>Filtrer par dossier :</p>
        <div className="badges">
          {dossiers.map((dossier) => (
            <button
              key={dossier.id}
              type="button"
              className={
                selectedFolders.includes(dossier.id)
                  ? "badge-button active"
                  : "badge-button"
              }
              onClick={() => toggleFolder(dossier.id)}
            >
              {dossier.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolbar;