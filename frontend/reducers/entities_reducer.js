import { combineReducers } from 'redux';
import recruitersReducer from './recruiters/recruiters_reducer';

const entitiesReducers = combineReducers({
  recruiters: recruitersReducer
})

export default entitiesReducers