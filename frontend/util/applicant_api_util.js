export const fetchApplicants = recruiterId => (
  $.ajax({
    method: 'GET',
    url: `/applicants`,
  })
);

export const deleteApplicant = applicantId => (
  $.ajax({
    method: 'DELETE',
    url: `/applicants/${applicantId}`
  })
);

export const updateApplicant = applicant => (
  $.ajax({
    method: 'PATCH',
    url: `/applicants/${applicant.id}`,
    data: { applicant }
  })
);

export const createApplicant = applicant => (
  $.ajax({
    method: 'POST',
    url: `/applicants`,
    data: { applicant }
  })
);

