import React from 'react';

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
    const recruiters = this.props.recruiters.map(recruiter => <><div key={recruiter.id}>{recruiter.name} - {recruiter.team}</div><div key={recruiter.name} onClick={(e) => this.handleDelete(recruiter.id)}>X</div></>)
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