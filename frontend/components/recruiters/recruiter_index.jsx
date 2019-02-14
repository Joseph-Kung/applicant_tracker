import React from 'react';
import RecruiterShow from './recruiter_show';

class recruiterIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      team: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecruiters();
    this.props.fetchApplicants();
  }

  handleChange(e) {
    const target = e.target
    this.setState({[target.name]: target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRecruiter(this.state);
    this.setState({
      name: '',
      team: '',
    })
  }

  handleDelete(id) {
    this.props.deleteRecruiter(id);
  }

  render() {
    const recruiters = this.props.recruiters.map(recruiter => <RecruiterShow key={recruiter.id} applicants={this.props.applicants} recruiter={recruiter} deleteRecruiter={this.deleteRecruiter} />)
    return (
      <>
        <h1>Recruiters</h1>
        {recruiters}

        <form onSubmit={this.handleSubmit}>
          <input type="text" name='name' onChange={this.handleChange} placeholder="Recruiter name" value={this.state.name}/>
          <select name="team" onChange={this.handleChange} value={this.state.team}>
            <option value="" disabled>--Select Team--</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
          </select>
          <button type="submit">Create Recruiter</button>
        </form>
      </>
    );
  }
}

export default recruiterIndex;