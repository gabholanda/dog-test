class Caregiver < ApplicationRecord
  has_many :dogs, through: :caredays
  has_secure_password

  validates :email, presence: true, uniqueness: true
	validates :username, presence: true, uniqueness: true
end
