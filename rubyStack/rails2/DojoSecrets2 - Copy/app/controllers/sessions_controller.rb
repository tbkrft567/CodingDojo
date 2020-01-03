class SessionsController < ApplicationController
   def new #login
   end
 
   
   def logout #logout
     reset_session
     redirect_to '/sessions/new'
   end
 
   def create #login
     newParams = new_user
     @user = User.find_by_email(newParams[:email]).try(:authenticate, newParams[:password])
      if @user 
       session[:user_id] = @user.id
       redirect_to user_path(current_user.id.to_s)
     else
       flash[:alert] = ['Invalid Combination']
       redirect_to new_session_path
     end
   end
end