import { RECEIVE_APPLICANT, RECEIVE_APPLICANTS, REMOVE_APPLICANT } from '../../actions/applicant/applicant_actions';

const applicantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_APPLICANT:
      return Object.assign({}, state, {[action.applicant.id]: action.applicant})
    case RECEIVE_APPLICANTS:
      return action.applicants
    case REMOVE_APPLICANT:
      let newState = Object.assign({}, state);
      delete newState[action.applicantId];
      return newState
    default:
      return state
  }
}

export default applicantsReducer;