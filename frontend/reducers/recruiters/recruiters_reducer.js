import { RECEIVE_RECRUITERS } from '../../actions/recruiter/recruiter_actions';

const recruitersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RECRUITERS:
      return action.recruiters;
    default:
      return state;
  }
};

export default recruitersReducer
