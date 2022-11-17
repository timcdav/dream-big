class CreatePlanets < ActiveRecord::Migration[7.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.bigint :journey_id
      t.timestamps
    end
  end
end