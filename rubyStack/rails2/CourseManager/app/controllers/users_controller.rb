class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :new]
  
  def new
    @logged = logged?
    # reset_session
  end

  def create
    @user = User.new(secureUser)
    if @user.valid?
      @user.save
      redirect_to courses_index_path
    else
      flash[:alert] = @user.errors.full_messages
      redirect_to users_new_path
    end      
  end
end
