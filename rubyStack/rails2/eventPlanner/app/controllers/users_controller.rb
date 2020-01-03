class UsersController < ApplicationController
  def new
    # @logged = logged?
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def create
    @user = User.new(secureUser)
    if @user.valid?
      @user.save
      redirect_to events_index_path
    else
      flash[:alert] = @user.errors.full_messages
      redirect_to users_new_path
    end
  end
end
