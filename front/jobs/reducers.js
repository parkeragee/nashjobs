export function jobs(state=[], action) {
  if (action.type === 'FETCH_JOBS' && action.status === 'success') {
    return action.response.data;
  }

  if (action.type === 'ADD_JOB' && action.status === 'success') {
    return [action.response, ...state];
  }
  return state;
}
