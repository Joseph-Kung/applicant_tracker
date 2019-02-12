import React from 'react';

class RecruiterShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteRecruiter(id);
  }

  render() {
    const { recruiter } = this.props
    return (
      <>
        <div>{recruiter.name} - {recruiter.team}</div>
        <div onClick={(e) => this.handleDelete(recruiter.id)}>X</div>
      </>
    )
  }
}

export default RecruiterShow;