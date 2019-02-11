@recruiters.each do |recruiter|
  json.set! recruiter.id do
    json.extract! recruiter, :id, :name, :team
  end
end