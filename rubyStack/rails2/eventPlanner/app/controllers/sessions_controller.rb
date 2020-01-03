class SessionsController < ApplicationController
  def create
    @user = User.find_by_email(secureUser[:email]).try(:authenticate, secureUser[:password])
    if @user
      session[:user_id] = @user.id
      redirect_to events_index_path
    else
      flash[:alert] = ['Invalid Combination']
      redirect_to users_new_path
    end
  end

  def destroy
  end
end
