class Owner < ApplicationRecord
  has_many :dogs, dependent: :destroy
  has_secure_password
  
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
end
