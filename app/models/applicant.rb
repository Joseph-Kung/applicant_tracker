class Applicant < ApplicationRecord
  validates :name, :position, :location, :type, :traveling, presence: true
  validates :status, presence: true, inclusion: ['Phone Screen', 'On-Site', 'Technical Phone Screen']
  validates :location, presence: true, inclusion: ['Bay Area', 'New York']
  validates :traveling, presence: true, inclusion: [true, false]

  belongs_to :recruiter,
    foreign_key: :recruiter_id,
    class_name: :Recruiter

    
end
