class SessionsController < ApplicationController
  def new #login
  end

  
  def destroy #logout
    reset_session
    redirect_to '/sessions/new'
  end

  def create #register
    newParams = new_user
    @user = User.find_by_email(newParams[:email]).try(:authenticate, newParams[:password])
    if @user
      session[:user_id] = @user.id
      redirect_to '/users/'+ current_user.id.to_s
    else
      flash[:alert] = ['Invalid Combination']
      redirect_to sessions_new_path
    end
  end
end
