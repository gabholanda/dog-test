class CareDay < ApplicationRecord
  belongs_to :dog
  belongs_to :caregiver
end
