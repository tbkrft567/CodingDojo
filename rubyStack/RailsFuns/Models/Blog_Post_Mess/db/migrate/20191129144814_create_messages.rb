class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :Author
      t.text :Message
      t.references :Post, foreign_key: true

      t.timestamps
    end
  end
end
