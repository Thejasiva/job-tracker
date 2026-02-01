import { useState } from "react"

function JobItem({ job, deleteJob, updateJob }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedJob, setEditedJob] = useState(job)

  const handleSave = () => {
    if (!editedJob.company || !editedJob.role || !editedJob.appliedDate)
      return alert("Fill all required fields")

    updateJob(editedJob)
    setIsEditing(false)
  }

  return (
    <tr className="job-row">
      {isEditing ? (
        <>
          <td>
            <input
              className="table-input"
              type="text"
              value={editedJob.company}
              onChange={e => setEditedJob({ ...editedJob, company: e.target.value })}
            />
          </td>

          <td>
            <input
              className="table-input"
              type="text"
              value={editedJob.role}
              onChange={e => setEditedJob({ ...editedJob, role: e.target.value })}
            />
          </td>

          <td>
            <select
              className="table-input"
              value={editedJob.status}
              onChange={e => setEditedJob({ ...editedJob, status: e.target.value })}
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </td>

          <td>
            <input
              className="table-input"
              type="date"
              value={editedJob.deadline || ""}
              onChange={e => setEditedJob({ ...editedJob, deadline: e.target.value })}
            />
          </td>

          <td>
            <input
              className="table-input"
              type="date"
              value={editedJob.appliedDate || ""}
              onChange={e => setEditedJob({ ...editedJob, appliedDate: e.target.value })}
              required
            />
          </td>

          {/* 🔗 Link */}
          <td>
            <input
              className="table-input"
              type="url"
              value={editedJob.link || ""}
              onChange={e => setEditedJob({ ...editedJob, link: e.target.value })}
              placeholder="https://job-link.com"
            />
          </td>

          {/* 📝 Notes */}
          <td>
            <input
              className="table-input"
              type="text"
              value={editedJob.notes || ""}
              onChange={e => setEditedJob({ ...editedJob, notes: e.target.value })}
              placeholder="Notes..."
            />
          </td>

          <td className="actions-cell">
            <button className="save-btn" onClick={handleSave}>💾</button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>✖</button>
          </td>
        </>
      ) : (
        <>
          <td className="cell-company">{job.company}</td>
          <td className="cell-role">{job.role}</td>

          <td>
            <span className={`status-badge ${job.status.toLowerCase()}`}>
              {job.status}
            </span>
          </td>

          <td>{job.deadline || "—"}</td>
          <td>{job.appliedDate || "—"}</td>

          {/* 🔗 View Link */}
          <td>
            {job.link ? (
              <a href={job.link} target="_blank" rel="noreferrer">🔗 View</a>
            ) : "—"}
          </td>

          {/* 📝 Notes display */}
          <td className="notes-cell">{job.notes || "—"}</td>

          <td className="actions-cell">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>✏</button>
            <button className="delete-btn" onClick={() => deleteJob(job.id)}>🗑</button>
          </td>
        </>
      )}
    </tr>
  )
}

export default JobItem
