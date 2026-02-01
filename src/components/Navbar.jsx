import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  return (
    <header className="navbar">
      <h2 className="logo">🎯 Job Tracker</h2>

      <nav className="nav-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Dashboard
        </Link>

        <Link
          to="/analytics"
          className={`nav-link ${location.pathname === "/analytics" ? "active" : ""}`}
        >
          Analytics
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
