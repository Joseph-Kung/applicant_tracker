export const fetchRecruiters = () => (
  $.ajax({
    method: 'GET',
    url: '/recruiters',
  })
)