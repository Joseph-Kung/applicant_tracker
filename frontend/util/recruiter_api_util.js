export const fetchRecruiters = () => (
  $.ajax({
    method: 'GET',
    url: '/recruiters',
  })
);

export const createRecruiter = recruiter => (
  $.ajax({
    method: 'POST',
    url: '/recruiters',
    data: { recruiter }
  })
);

export const deleteRecruiter = recruiterId => (
  $.ajax({
    method: 'DELETE',
    url: `/recruiters/${recruiterId}`
  })
)