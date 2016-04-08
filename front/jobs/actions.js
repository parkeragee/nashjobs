import api from '../api';
const jobsService = api.service('jobs');

export function fetchJobs(skip=0) {
  return (dispatch, getState) => {
    dispatch({ type: 'FETCH_JOBS', status: 'started' });
    let query = { query: {$skip: skip, $sort: { createdAt: -1}}};
    jobsService.find(query).then(response => {
      dispatch({ type: 'FETCH_JOBS', status: 'success', meta: {skip}, response });
    }).catch(error => {
      dispatch({ type: 'FETCH_JOBS', status: 'error', meta: {skip}, error });
    });
  }
};


export function addJob(job) {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_JOB', status: 'started' });

    jobsService.create(job).then(response => {
      // we will let the service dispatch the add event for this api response
    }).catch(error => {
      dispatch({ type: 'ADD_JOB', status: 'error', error });
    });
  }
};


 jobsService.on('created', function(response) {
   store.dispatch({ type: 'ADD_JOB', status: 'success', response });
 });
