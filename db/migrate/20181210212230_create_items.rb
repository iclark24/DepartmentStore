class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.belongs_to :department, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
