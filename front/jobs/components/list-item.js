import React from 'react';
import moment from 'moment';

const Job = ({job}) => (
  <div className="job-list-item">
    <header>
      <h2><a href={`/jobs/${job._id}`}>{job.title}</a></h2>
      <section className="meta">
        Posted by <a href="">{job.addedBy}</a> <time>{moment(job.createdAt).fromNow()}</time>
     </section>
    </header>
    <section className="content">
      <p>{job.description}</p>
    </section>

  </div>
);


export default Job;
