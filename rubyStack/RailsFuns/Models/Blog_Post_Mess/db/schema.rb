# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20191129144814) do

  create_table "blogs", force: :cascade do |t|
    t.string   "Name"
    t.text     "Description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string   "Author"
    t.text     "Message"
    t.integer  "Post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["Post_id"], name: "index_messages_on_Post_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string   "Title"
    t.text     "Content"
    t.integer  "Blog_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["Blog_id"], name: "index_posts_on_Blog_id"
  end

end
