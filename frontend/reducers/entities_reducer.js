import { combineReducers } from 'redux';
import recruitersReducer from './recruiters/recruiters_reducer';
import applicantsReducer from './applicants/applicants_reducer';

const entitiesReducers = combineReducers({
  recruiters: recruitersReducer,
  applicants: applicantsReducer,
})

export default entitiesReducers