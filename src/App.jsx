import { useState, useEffect } from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import JobForm from "./components/JobForm"
import JobList from "./components/JobList"
import Stats from "./components/Stats"
import Analytics from "./pages/Analytics"

function App() {
  const location = useLocation()

  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs")
    return savedJobs ? JSON.parse(savedJobs) : []
  })

  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)

  const jobsPerPage = 10

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])

  const deleteJob = (id) => {
    setJobs(prev => prev.filter(job => job.id !== id))
  }

  const updateJob = (updatedJob) => {
    setJobs(prev =>
      prev.map(job => job.id === updatedJob.id ? updatedJob : job)
    )
  }

  // 🔍 FILTER + SEARCH
  const filteredJobs = jobs.filter(job => {
    const matchesStatus = filter === "All" || job.status === filter
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
    return matchesStatus && matchesSearch
  })

  // 🔄 SORT
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sort === "newest") return b.id - a.id
    if (sort === "oldest") return a.id - b.id
    if (sort === "company") return a.company.localeCompare(b.company)
    return 0
  })

  // 📄 PAGINATION
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob)
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage)

  // Reset page when controls change
  useEffect(() => {
    setCurrentPage(1)
  }, [filter, search, sort])

  return (
    <div className="app-container">

      {/* NAVBAR */}
      <header className="navbar">
        <h2 className="logo">🎯 Job Tracker</h2>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Dashboard
          </Link>
          <Link to="/analytics" className={`nav-link ${location.pathname === "/analytics" ? "active" : ""}`}>
            Analytics
          </Link>
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main className="dashboard">

              <h1 className="page-title">Job Tracker Dashboard</h1>

              <Stats jobs={jobs} />

              {/* CONTROLS */}
              <div className="controls-bar">

                <input
                  type="text"
                  placeholder="🔍 Search company or role..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="search-input"
                />

                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="filter-select"
                >
                  <option>All</option>
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="filter-select"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="company">Company A–Z</option>
                </select>

              </div>

              <JobForm jobs={jobs} setJobs={setJobs} />

              <JobList
                jobs={currentJobs}
                deleteJob={deleteJob}
                updateJob={updateJob}
              />

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                  >
                    ⬅ Prev
                  </button>

                  <span>
                    Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                  </span>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => p + 1)}
                  >
                    Next ➡
                  </button>
                </div>
              )}

            </main>
          }
        />

        <Route path="/analytics" element={<Analytics jobs={jobs} />} />
      </Routes>
    </div>
  )
}

export default App
