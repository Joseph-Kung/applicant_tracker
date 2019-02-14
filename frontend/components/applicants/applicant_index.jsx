import React from 'react';
import ApplicantShow from './applicant_show';

class ApplicantIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    debugger
    let applicants = this.props.applicants.filter(applicant => applicant.recruiter_id === this.props.recruiterId);
    applicants = applicants.map(applicant => <ApplicantShow applicant={applicant} />)
    return (
      <>
        {applicants}
      </>
    )
  }
}

export default ApplicantIndex;