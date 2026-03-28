import { PieChart } from 'react-minimal-pie-chart';
import './Header.css';

function Header({
  mode,
  setMode,
  totalTasks,
  nonFinishedCount,
  handleReloadBackup,
  handleResetToZero,
  statsByEtat,
}) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>ToDo List</h1>
        <div className="header-stats-container">
          <div className="header-stats">
            <p>Nombre total de tâches : {totalTasks}</p>
            <p>Nombre de tâches non terminées : {nonFinishedCount}</p>
          </div>
          
          {totalTasks > 0 && (
            <div className="chart-section">
              <div className="pie-container">
                <PieChart
                  data={statsByEtat}
                  lineWidth={25}
                  rounded
                  animate
                />
              </div>
              {/* AJOUT DE LA LÉGENDE */}
              <div className="chart-legend">
                {statsByEtat.map((stat) => (
                  <div key={stat.title} className="legend-item">
                    <span 
                      className="legend-color" 
                      style={{ backgroundColor: stat.color }}
                    ></span>
                    <span className="legend-label">{stat.title} ({stat.value})</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="header-right">
        {/* ... (le reste du code des boutons reste identique) */}
        <div className="mode-buttons">
          <button
            type="button"
            className={mode === "tasks" ? "mode-button active-mode" : "mode-button"}
            onClick={() => setMode("tasks")}
          >
            Mode Tâches
          </button>
          <button
            type="button"
            className={mode === "folders" ? "mode-button active-mode" : "mode-button"}
            onClick={() => setMode("folders")}
          >
            Mode Dossiers
          </button>
        </div>

        <div className="reset-buttons">
          <button type="button" className="reload-button" onClick={handleReloadBackup}>
            Reset backup
          </button>
          <button type="button" className="zero-button" onClick={handleResetToZero}>
            Repartir de zéro
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;