import React from 'react';
import JobItem from './list-item';

const Jobs = ({jobs}) => {
  return (
    <div className="job-list">
      <div className="job-list-wrapper">
	      {jobs.map((job, i) => <JobItem job={job} key={i} />)}
      </div>
    </div>
  )
};

export default Jobs;
