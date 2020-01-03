class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authorize
  
  private
    def current_user
      User.find_by(id: session[:user_id]) if session[:user_id]
    end
    def secureUser
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
    def secureCourse
      params.require(:course).permit(:name, :instructor, :capacity)
    end
    def logged?
      !current_user.nil?
    end
    def authorize
      unless logged?
        redirect_to users_new_path
      end
    end

end
