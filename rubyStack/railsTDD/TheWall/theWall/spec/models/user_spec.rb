require 'rails_helper'

RSpec.describe User, type: :model do
  context "Username field: must be required, must be unique, must be loger than 5 characters" do
    it "Username: must be required" do
      expect(build(:user, username: "")).to be_invalid
    end
    it "Username: must be unique" do
      create(:user)
      expect(build(:user)).to be_invalid
    end
    it "Username: must be longer than 5 characters" do
      expect(build(:user, username: "a")).to be_invalid
    end
  end
end
