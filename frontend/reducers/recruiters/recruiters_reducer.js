import { DELETE_RECRUITER, RECEIVE_RECRUITERS, RECEIVE_RECRUITER } from '../../actions/recruiter/recruiter_actions';

const recruitersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECRUITERS:
      return action.recruiters;
    case RECEIVE_RECRUITER:
      return Object.assign({}, state, { [action.recruiter.id]: action.recruiter })
    case DELETE_RECRUITER:
      const newRecruiters = Object.assign({}, state)
      delete newRecruiters[action.recruiterId]
      return newRecruiters
    default:
      return state;
  }
};

export default recruitersReducer
