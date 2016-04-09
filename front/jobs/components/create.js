import React, { PropTypes } from 'react'

class JobCreate extends React.Component {
  render () {
    return (
      <div className="job-create">
        <form method="POST" action="/jobs" ref="form">
          <input type="text" placeholder="title" ref="title"/>
          <textarea placeholder="description" ref="description"/>
          <input type="text" placeholder="company" ref="company"/>
          <input type="text" placeholder="added by" ref="addedBy"/>
          <input type="text" placeholder="link" ref="link"/>

            <button type="submit" onClick={
                (e) => {
                  this.props.onSubmit({
                    title: this.refs.title.value,
                    description: this.refs.description.value,
                    company: this.refs.company.value,
                    addedBy: this.refs.addedBy.value,
                    link: this.refs.link.value
                  });

                  this.refs.form.reset();
                  e.preventDefault();
                }
              }>Add New Job!</button>
          </form>
      </div>
    )
  }
}

export default JobCreate;
