@applicants.each do |applicant|
  json.set! applicant.id do
    json.extract! applicant, :id, :recruiter_id, :name, :position, :status, :location, :method, :date, :traveling
  end
end