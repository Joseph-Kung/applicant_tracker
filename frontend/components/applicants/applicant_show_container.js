import { connect } from 'react-redux';
import { deleteApplicant, updateApplicant, createApplicant } from '../../util/applicant_api_util';
import { create } from 'domain';
import applicantShow from './applicant_show';

const mapDipsatchToProps = dispatch => ({
  deleteApplicant: id => dispatch(deleteApplicant(id)),
  updateApplicant: applicant => dispatch(updateApplicant(applicant)),
  createApplicant: applicant => dispatch(createApplicant(applicant))
});

export default connect(null, mapDipsatchToProps)(applicantShow);