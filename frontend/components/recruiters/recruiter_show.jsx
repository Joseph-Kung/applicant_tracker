import React from 'react';
import ApplicantIndex from '../applicants/applicant_index';

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
        <ApplicantIndex applicants={this.props.applicants} recruiterId={recruiter.id} />
      </>
    )
  }
}

export default RecruiterShow;