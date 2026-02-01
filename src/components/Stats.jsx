import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line,
} from "recharts"

function Stats({ jobs, view }) {
  const statusCount = { Applied: 0, Interview: 0, Offer: 0, Rejected: 0 }

  jobs.forEach(job => {
    if (statusCount[job.status] !== undefined) {
      statusCount[job.status]++
    }
  })

  const totalJobs = jobs.length
  const successRate =
    totalJobs === 0
      ? 0
      : ((statusCount.Offer / totalJobs) * 100).toFixed(1)

  const statusData = Object.keys(statusCount).map(key => ({
    name: key,
    value: statusCount[key],
  }))

  const COLORS = ["#3498db", "#f39c12", "#2ecc71", "#e74c3c"]

  /* ================= DASHBOARD CARDS ================= */
  if (!view) {
    return (
      <div className="stats-cards">
        <div className="stat-card applied">
          <h2>{statusCount.Applied}</h2>
          <p>Applied</p>
        </div>

        <div className="stat-card interview">
          <h2>{statusCount.Interview}</h2>
          <p>Interviews</p>
        </div>

        <div className="stat-card offer">
          <h2>{statusCount.Offer}</h2>
          <p>Offers</p>
        </div>

        <div className="stat-card rejected">
          <h2>{statusCount.Rejected}</h2>
          <p>Rejected</p>
        </div>

        <div className="stat-card success">
          <h2>{successRate}%</h2>
          <p>Success Rate</p>
        </div>
      </div>
    )
  }

  /* ================= MONTHLY APPLICATIONS ================= */
  const monthlyCount = {}

  jobs.forEach(job => {
    if (!job.appliedDate) return
    const month = new Date(job.appliedDate).toLocaleString("default", { month: "short" })
    monthlyCount[month] = (monthlyCount[month] || 0) + 1
  })

  const monthlyData = Object.keys(monthlyCount)
    .sort((a, b) => new Date(`1 ${a} 2024`) - new Date(`1 ${b} 2024`))
    .map(month => ({
      month,
      applications: monthlyCount[month],
    }))

  /* ================= TOP COMPANIES ================= */
  const companyCount = {}

  jobs.forEach(job => {
    companyCount[job.company] = (companyCount[job.company] || 0) + 1
  })

  const topCompanies = Object.entries(companyCount)
    .map(([company, applications]) => ({ company, applications }))
    .sort((a, b) => b.applications - a.applications)
    .slice(0, 5)

  /* ================= ANALYTICS CHARTS ================= */
  return (
    <div className="stats-dashboard">
      {view === "status" && (
        <div className="chart-card">
          <h3>Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={statusData} dataKey="value" outerRadius={100} label>
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {view === "bar" && (
        <div className="chart-card">
          <h3>Status Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {view === "monthly" && (
        <div className="chart-card">
          <h3>Monthly Applications</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="applications" stroke="#f59e0b" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {view === "companies" && (
        <div className="chart-card">
          <h3>Top Companies</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topCompanies}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="company" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="applications" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {view === "success" && (
        <div className="success-box">
          🎯 Success Rate: <span>{successRate}%</span>
        </div>
      )}
    </div>
  )
}

export default Stats
