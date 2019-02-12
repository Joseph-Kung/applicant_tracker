class CreateApplicant < ActiveRecord::Migration[5.2]
  def change
    create_table :applicants do |t|
      t.integer :recruiter_id, null: false
      t.string :name, null: false
      t.string :position, null: false
      t.string :status, null: false
      t.string :location, null: false
      t.string :type, null: false
      t.date :date
      t.boolean :traveling, null: false

      t.timestamps
    end

    add_index :applicants, :recruiter_id
    add_index :applicants, :name
    add_index :applicants, :position
  end
end
