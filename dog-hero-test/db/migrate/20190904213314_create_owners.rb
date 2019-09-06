class CreateOwners < ActiveRecord::Migration[6.0]
  def change
    create_table :owners do |t|
      t.string :name
      t.integer :age, default: 0
      t.string :image
      t.string :address
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :username, null: false

      t.timestamps
    end
  end
end
