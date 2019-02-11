import React from 'react';
import { Route } from 'react-router-dom';
import RecruitersContainer from './recruiters/recruiter_index_container';

const App = () => (
  <>
    <Route path='/' component={RecruitersContainer} />
  </>
)

export default App;