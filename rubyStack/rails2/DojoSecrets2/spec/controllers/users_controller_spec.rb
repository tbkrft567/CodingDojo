require 'rails_helper'
RSpec.describe UsersController, type: :controller do
   before do
      @user1 = create(:user)
   end
   context "when not logged in" do
      # before do
      #    session[:user_id] = nil
      # end
      # it "cannot access show" do 
      #    get :show, id: @user1
      #    expect(response).to redirect_to("/sessions/new")
      # end
      # it "cannot access edit" do
      #    get :edit, id: @user1
      #    expect(response).to redirect_to("/sessions/new")
      # end
      # it "cannot access update" do
      #    patch :update
      #    expect(response).to redirect_to("/sessions/new")
      # end
      # it "cannot access destroy" do
      #    delete :destroy, id: @user1
      #    expect(response).to redirect_to("/sessions/new")
      # end
   end
   context "when signed in as the wrong user" do
      before do
         @user2 = create(:user, email: "kraftzachariah@yahoo.com")
         session[:user_id] = @user2.id
      end
      it "cannot access profile page another user" do
         expect(get('/users/'+@user1.id.to_s)).to have_text("Welcome! "+@user2.name)
      end
      it "cannot access the edit page of another user" do 

      end
      it "cannot update another user" do

      end
      it "cannot destroy another user" do

      end
    end
end