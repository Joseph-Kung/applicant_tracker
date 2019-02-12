class Applicant < ApplicationRecord
  validates :name, :position, :traveling, presence: true
  validates :method, presence: true, inclusion: ['Google Hangouts', 'In Person']
  validates :status, presence: true, inclusion: ['Phone Screen', 'On-Site', 'Technical Phone Screen']
  validates :location, presence: true, inclusion: ['Bay Area', 'New York']
  validates :traveling, inclusion: [true, false]

  belongs_to :recruiter,
    foreign_key: :recruiter_id,
    class_name: :Recruiter
 
end
