import { useState } from "react"

function JobForm({ jobs, setJobs }) {
  const [job, setJob] = useState({
    company: "",
    role: "",
    status: "Applied",
    deadline: "",
    appliedDate: "",
    link: "",
    notes: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!job.company || !job.role || !job.appliedDate)
      return alert("Fill all required fields")

    const newJob = { ...job, id: Date.now() }
    setJobs([...jobs, newJob])

    setJob({
      company: "",
      role: "",
      status: "Applied",
      deadline: "",
      appliedDate: "",
      link: "",
      notes: ""
    })
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-grid">

        <div className="form-field">
          <label>Company</label>
          <input
            type="text"
            placeholder="e.g. Google"
            value={job.company}
            onChange={(e) => setJob({ ...job, company: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label>Role</label>
          <input
            type="text"
            placeholder="Frontend Developer"
            value={job.role}
            onChange={(e) => setJob({ ...job, role: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label>Status</label>
          <select
            value={job.status}
            onChange={(e) => setJob({ ...job, status: e.target.value })}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="form-field">
          <label>📅 Application Deadline</label>
          <input
            type="date"
            value={job.deadline}
            onChange={(e) => setJob({ ...job, deadline: e.target.value })}
          />
        </div>

        <div className="form-field">
          <label>🗓 Date You Applied *</label>
          <input
            type="date"
            value={job.appliedDate}
            onChange={(e) => setJob({ ...job, appliedDate: e.target.value })}
            required
          />
        </div>

        <div className="form-field">
          <label>🔗 Application Link</label>
          <input
            type="url"
            placeholder="https://job-post-link.com"
            value={job.link}
            onChange={(e) => setJob({ ...job, link: e.target.value })}
          />
        </div>

        <div className="form-field" style={{ gridColumn: "span 2" }}>
          <label>📝 Notes</label>
          <input
            type="text"
            placeholder="Interview notes, HR contact, reminders..."
            value={job.notes}
            onChange={(e) => setJob({ ...job, notes: e.target.value })}
          />
        </div>

        <button type="submit" className="add-job-btn">
          ➕ Add Job
        </button>

      </form>
    </div>
  )
}

export default JobForm
