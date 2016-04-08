import React from 'react';
import JobItem from './list-item';

const Jobs = ({jobs}) => {
  return (
    <div className="job-list">
      {jobs.map((job, i) => <JobItem job={job} key={i} />)}
    </div>
  )
};

export default Jobs;
