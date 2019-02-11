import { connect } from 'react-redux';
import { fetchRecruiters } from '../../actions/recruiter/recruiter_actions';
import recruiterIndex from './recruiter_index';

const mapStateToProps = state => ({
  recruiters: Object.values(state.entities.recruiters)
});

const mapDispatchToProps = dispatch => ({
  fetchRecruiters: () => dispatch(fetchRecruiters())
});

export default connect(mapStateToProps, mapDispatchToProps)(recruiterIndex);