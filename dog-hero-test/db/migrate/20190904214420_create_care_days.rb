class CreateCareDays < ActiveRecord::Migration[6.0]
  def change
    create_table :care_days do |t|

      t.timestamps
    end
  end
end
