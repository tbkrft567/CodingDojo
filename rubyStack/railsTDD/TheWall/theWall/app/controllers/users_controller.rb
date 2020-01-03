class UsersController < ApplicationController
def index
end
def new
   # @user = User.new
end
def signin
   # puts params[:user][:username]
   @logUser = User.find_by(username: params[:user][:username]) 
   # @logUser = User.find(1) 
   puts 'hello'
   puts @logUser
   
   session[:user_id] = @logUser.id
   redirect_to '/messages'
end 
def create
   @user = User.create(new_user)
   if @user.valid?
      session[:user_id] = @user.id
      redirect_to '/messages'
   else
      flash[:alert] = @user.errors.full_messages
      redirect_to '/users/new'
   end
end

private
   def new_user
      params.require(:user).permit(:username)
   end
end
