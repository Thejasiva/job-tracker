import { useState } from "react"
import Stats from "../components/Stats"

function Analytics({ jobs }) {
  const [view, setView] = useState("status")

  const buttons = [
    { key: "status", label: "Status Chart" },
    { key: "bar", label: "Bar Chart" },
    { key: "monthly", label: "Monthly Graph" },
    { key: "companies", label: "Top Companies" },
    { key: "success", label: "Success Rate" },
  ]

  return (
    <div className="analytics-page">
      <h1 className="page-title">Analytics Dashboard</h1>

      <div className="analytics-buttons">
        {buttons.map(btn => (
          <button
            key={btn.key}
            onClick={() => setView(btn.key)}
            className={`analytics-btn ${view === btn.key ? "active" : ""}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="chart-wrapper">
        <Stats jobs={jobs} view={view} />
      </div>
    </div>
  )
}

export default Analytics
