import JobItem from "./JobItem"

function JobList({ jobs, deleteJob, updateJob }) {

  // Empty state
  if (!jobs || jobs.length === 0) {
    return (
      <div className="no-jobs-box">
        📭 No jobs found matching your filters.
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table className="job-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Applied On</th>
            <th>Link</th>     {/* NEW */}
            <th>Notes</th>    {/* NEW */}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <JobItem
              key={job.id}
              job={job}
              deleteJob={deleteJob}
              updateJob={updateJob}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobList
