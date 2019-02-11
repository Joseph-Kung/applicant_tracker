class Recruiter < ApplicationRecord
  validates :name
  validates :team, inclusion: ['Sales', 'Engineering']
end