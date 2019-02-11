class CreateRecruiterTable < ActiveRecord::Migration[5.2]
  def change
    create_table :recruiters do |t|
      t.string :name, unique: true, null: false
      t.string :team, null: false

      t.timestamps
    end

    add_index :recruiters, :name
    add_index :recruiters, :team
  end
end
