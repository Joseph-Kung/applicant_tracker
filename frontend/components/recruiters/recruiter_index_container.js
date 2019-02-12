import { connect } from 'react-redux';
import { fetchRecruiters, deleteRecruiter, createRecruiter } from '../../actions/recruiter/recruiter_actions';
import recruiterIndex from './recruiter_index';

const mapStateToProps = state => ({
  recruiters: Object.values(state.entities.recruiters),
  applicants: Object.values(state.entities.applicants),
});

const mapDispatchToProps = dispatch => ({
  fetchApplicants: () => dispatch(fetchApplicants()),
  fetchRecruiters: () => dispatch(fetchRecruiters()),
  createRecruiter: (recruiter) => dispatch(createRecruiter(recruiter)),
  deleteRecruiter: id => dispatch(deleteRecruiter(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(recruiterIndex);