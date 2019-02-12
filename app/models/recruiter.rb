class Recruiter < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :team, inclusion: ['Sales', 'Engineering']

  has_many :applicants,
    foreign_key: :recruiter_id,
    class_name: :Applicant
end