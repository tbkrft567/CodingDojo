class SesssionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :new]
  
  def create
    @user = User.find_by_email(secureUser[:email]).try(:authenticate, secureUser[:password])
    if @user
      session[:user_id] = @user.id
      redirect_to courses_index_path
    else
      flash[:alert] = ['invalid combination']
      redirect_to users_new_path
    end
  end

  def destroy
    reset_session
    redirect_to users_new_path
  end
end
