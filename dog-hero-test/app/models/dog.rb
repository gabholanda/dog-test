class Dog < ApplicationRecord
  belongs_to :owner
  has_many :caregivers, through: :care_days
end
