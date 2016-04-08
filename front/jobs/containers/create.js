import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addJob } from '../actions';
import JobsCreate from '../components/create';

class JobsCreateContainer extends React.Component {
  render () {
    return (
      <JobsCreate onSubmit={this.props.addJob}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addJob}, dispatch);
}

export default connect(null, mapDispatchToProps)(JobsCreateContainer);
