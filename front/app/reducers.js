import { combineReducers } from 'redux';
import { jobs } from '../jobs/reducers';

const user = (state='will') => {
  return state;
}
export default combineReducers({
  user,
  jobs
});
