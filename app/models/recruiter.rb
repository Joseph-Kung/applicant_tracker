class Recruiter < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :team, inclusion: ['Sales', 'Engineering']
end