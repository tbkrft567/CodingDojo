class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :Title
      t.text :Content
      t.references :Blog, foreign_key: true

      t.timestamps
    end
  end
end
