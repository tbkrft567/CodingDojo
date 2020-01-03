require 'rails_helper'

RSpec.describe Message, type: :model do
  context "Message field: must be required, must be longer than 10 characters" do
    it "Message: must be required" do
      expect(build(:message, user: build(:user), message: "")).to be_invalid
    end
    it "Message: must be longer than 10 characters" do
      expect(build(:message, user: build(:user), message: "invalid")).to be_invalid
    end
  end
  context "User Reference field: must be required" do
    it "User Reference Field: must be required" do
      expect(build(:message, user: nil)).to be_invalid
    end
  end
end
