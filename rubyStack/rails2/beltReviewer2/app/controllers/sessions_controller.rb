class SessionsController < ApplicationController
  def create
    newParams = new_user
    @user = User.find_by_email(newParams[:email]).try(:authenticate, newParams[:password])
    if @user
      session[:user_id] = @user.id
      redirect_to events_index_path
    else
      flash[:alert] = ['Invalid Combination']
      redirect_back(fallback_location: users_path)
    end
  end

  def destroy
    reset_session
    redirect_to users_path
  end
end
