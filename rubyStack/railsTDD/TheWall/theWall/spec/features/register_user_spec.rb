require 'rails_helper'
feature "Navigate to Register page" do
   before(:each) do
      visit '/users'
   end
      scenario "Register Button takes them to create new user" do
         click_button "Register"
         expect(page).to have_content "Register New User"
         expect(page).to have_current_path('/users/new')
      end
end
feature "Create User on the register page" do
   before(:each) do
      visit '/users'
      click_button "Register"
   end
   scenario "Successfully creating user should route the new user to the message dashboard" do
      fill_in "user[username]", with: "tbkrft567"
      click_button 'Create User'
      expect(page).to have_current_path(messages_path())
      expect(page).to have_content "Welcome, tbkrft567"
      expect(page).to have_content "CodingDojo Wall"
   end
   scenario "Unsuccessfully creation of user should route the new user back to register page" do
      fill_in "user[username]", with: ""
      click_button 'Create User'
      expect(page).to have_content "No User Created. Username must be greater than 5 characters"
      expect(page).to have_current_path(new_user_path())
   end
end
# before(:each) do
#    fill_in "new_username", with: "tbkrft567"
#    click_button 'Create User'
# end