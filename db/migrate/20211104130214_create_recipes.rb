class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image
      t.string :tags
      t.text :description
      t.string :chef

      t.timestamps
    end
  end
end
