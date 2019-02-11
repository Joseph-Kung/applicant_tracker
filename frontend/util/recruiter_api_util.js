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
    data: {
      recruiter: {
        name: recruiter.name,
        team: recruiter.team
      }
    }
  })
);

export const deleteRecruiter = recruiterId => (
  $.ajax({
    method: 'DELETE',
    url: `/recruiters/${recruiterId}`
  })
)