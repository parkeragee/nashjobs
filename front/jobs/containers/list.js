import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchJobs } from '../actions';
import JobsList from '../components/list';

class JobsListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  render () {
    return (
      <JobsList jobs={this.props.jobs} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchJobs}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsListContainer);
