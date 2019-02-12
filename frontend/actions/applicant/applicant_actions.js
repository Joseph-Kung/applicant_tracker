import * as applicantUtil from '../../util/applicant_api_util';

export const RECEIVE_APPLICANT = 'RECEIVE_APPLICANT';
export const RECEIVE_APPLICANTS = 'RECEIVE_APPLICANTS';
export const REMOVE_APPLICANT = 'REMOVE_APPLICANT';

const receiveApplicant = applicant => ({
  type: RECEIVE_APPLICANT,
  applicant
});

const receiveApplicants = applicants => ({
  type: RECEIVE_APPLICANTS,
  applicants
});

const removeApplicant = applicantId => ({
  type: RECEIVE_APPLICANTS,
  applicantId
});

export const fetchApplicants = () => dispatch => {
  applicantUtil.fetchApplicants()
    .then(applicant => dispatch(receiveApplicants(applicant)))
}

export const updateApplicant = applicant => dispatch => {
  applicantUtil.updateApplicant(applicant)
    .then(applicant => dispatch(receiveApplicant(applicant)))
}

export const createApplicant = applicant => dispatch => {
  applicantUtil.createApplicant(applicant)
    .then(applicant => dispatch(receiveApplicant(applicant)))
}

export const deleteApplicant = applicantId => dispatch => {
  applicantUtil.deleteApplicant(applicantId)
    .then(applicant => dispatch(removeApplicant(applicant.id)))
}



