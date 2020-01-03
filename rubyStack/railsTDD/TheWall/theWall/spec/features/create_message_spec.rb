require 'rails_helper'
require 'time'
feature "If created successfully" do
   before(:each) do
      visit users_path()
      click_button "Register"
      fill_in "username", with: "tbkrft567"
      click_button "Create User"
      click_on('Log Out')
      fill_in "username", with: "tbkrft567"
      click_button "Sign In"
   end
   scenario "if created successfully" do
      expect(page).to have_content "Post a Message"
      fill_in "comment", with: "This is my first and only message"
      click_button "Post a Message"
      # page.first('p').text.should eq('tbkrft567 ' + Time.now)
      # page.first('li').text.should eq('This is my first and only message')

   end
end