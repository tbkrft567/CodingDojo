class UserController < ApplicationController
  def index
  end

  def create
    @newUser = User.last
    @flashMessage = flash[:success]
  end
  def new
    User.create(user_params)
    unless session[:count]
      session[:count] = 1
    else
      session[:count] +=1
    end
    flash[:success] = "Thanks for submitting this form! You ahve submitted this form " + session[:count].to_s + " times now." 
    redirect_to '/user/create'
  end 
  private
    def user_params
      params.require(:user).permit(:name, :location, :language, :comment)
    end
end