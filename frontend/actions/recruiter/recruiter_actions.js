import * as recruiterUtil from '../../util/recruiter_api_util';

export const RECEIVE_RECRUITERS;

const receiveRecruiters = recruiters => ({
  type: RECEIVE_RECRUITERS,
  recruiters
})

export const fetchRecruiters = () => dispatch => (
  recruiterUtil.fetchRecruiters()
    .then(recruiters => dispatch(receiveRecruiters(recruiters)))
)