class UsersController < ApplicationController
  def index
    # @user = User.new
    @states = states
  end

  def new
  end

  def create
    @user = User.new(new_user)
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      # redirect_to users_path
      redirect_to events_index_path
    else
      flash[:alert] = @user.errors.full_messages
      redirect_back(fallback_location: users_path)
    end
  end

  def edit
    @user = current_user
    @states = states
  end

  def update
    newParams = new_user
    @user = current_user
    @user.update(first_name: newParams[:first_name], last_name: newParams[:last_name], email: newParams[:email], location: newParams[:location], state: newParams[:state])
    if @user.valid?
      redirect_to events_index_path
    else
      flash[:alert] = @user.errors.full_messages
      redirect_back(fallback_location: users_edit_path)
    end
  end

  def destroy
    current_user.destroy
    reset_session
    redirect_to users_path
  end
end
