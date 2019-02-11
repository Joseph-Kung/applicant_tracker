import React from 'react';

class recruiterIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecruiters();
  }



  render() {
    const recruiters = this.props.recruiters.map(recruiter => <div key={recruiter.id} >{recruiter.name} - {recruiter.team}</div>)
    return (
      <>
        <h1>Recruiters</h1>
        {recruiters}
      </>
    );
  }
}

export default recruiterIndex;