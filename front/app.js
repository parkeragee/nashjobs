import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
window.store = store;


import CreateJob from './jobs/components/create';
import JobsListContainer from './jobs/containers/list';
import JobsCreateContainer from './jobs/containers/create';


 ReactDOM.render(
   <Provider store={store}>
     <div>
       <JobsCreateContainer/>
       <JobsListContainer/>
     </div>
   </Provider>,
   document.getElementById('root')
 );
