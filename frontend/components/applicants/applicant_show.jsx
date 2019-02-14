import React from 'react';

const applicantShow = (props) => {
  const { applicant } = props
  return (
    <>
      <ul>
        <p>{applicant.name}</p>
      </ul>
    </>
  )
}

export default applicantShow;