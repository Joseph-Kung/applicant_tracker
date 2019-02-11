import * as recruiterUtil from '../../util/recruiter_api_util';

export const RECEIVE_RECRUITERS = 'RECEIVE_RECRUITERS';
export const DELETE_RECRUITER = 'DELETE_RECRUITER';
export const RECEIVE_RECRUITER = 'RECEIVE_RECRUITER';

const receiveRecruiters = recruiters => ({
  type: RECEIVE_RECRUITERS,
  recruiters
})

const removeRecruiter = recruiterId => ({
  type: DELETE_RECRUITER,
  recruiterId
})

const receiveRecruiter = recruiter => ({
  type: RECEIVE_RECRUITER,
  recruiter
})

export const createRecruiter = (name, team) => dispatch => (
  recruiterUtil.createRecruiter(name, team)
    .then(recruiter => dispatch(receiveRecruiter(recruiter)) )
)

export const fetchRecruiters = () => dispatch => (
  recruiterUtil.fetchRecruiters()
    .then(recruiters => dispatch(receiveRecruiters(recruiters)))
)

export const deleteRecruiter = recruiterId => dispatch => (
  recruiterUtil.deleteRecruiter(recruiterId)
    .then(recruiter => dispatch(removeRecruiter(recruiter.id)))
)