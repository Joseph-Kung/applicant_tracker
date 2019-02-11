@recruiters.each do |recruiter|
  json.set! recruiter.id do
    json.extract! recruiter, :name, :team
  end
end