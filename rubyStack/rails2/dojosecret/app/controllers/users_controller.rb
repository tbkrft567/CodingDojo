class UsersController < ApplicationController
  def new
    @user = User.new
  end
  
  def show
    if current_user
      puts 'yes'
    end
  end
  
  def edit
  end
  
  def create
    # newParams = new_user # new_user can be found in the application_controller.rb
    # @user = User.new(new_user)
    @user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

    if @user.valid?
      # @user.save
      @user = User.create(name: params[:name], email: params[:email], password: params[:password])
      puts @user.id
      session[:user_id] = @user.id
      # redirect_to '/users/'+ current_user.id.to_s
    end
    # else
      # flash[:alert] = ["Can't be blank"]
      # redirect_to users_new_path
    # end
    # if User.new
    #   newUser = User.new(name: params[:name], params[:email], params[:password])
    #   newUser.save
    #   newUser.authenticate(params[:password_confirmation])
    #   session[:user_id] = newUser.id
    #   current_user
    # else
    #   flash[:alert] = ["can't be blank"]
    #   redirect_to '/users/new'
    # end
  end
# private
#   def new_user  
#     params.require(:user).permit(:name, :email, :password, :password_confirmation)  
#   end
end
