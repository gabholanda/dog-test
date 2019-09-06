class CreateCaregivers < ActiveRecord::Migration[6.0]
  def change
    create_table :caregivers do |t|
      t.string :name
      t.integer :age, default: 0
      t.string :image
      t.string :address
      t.string :email
      t.string :password_digest, null: false
      t.string :username, null: false
      t.float :rating, default: 0.0

      t.timestamps
    end
  end
end
