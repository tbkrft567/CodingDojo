class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authorize

  def current_user
    User.find(session[:user_id]) if session[:user_id]
    # reset_session
  end
  helper_method :current_user
  private
    def new_user  
      params.require(:user).permit(:name, :email, :password, :password_confirmation)  
    end
    def new_secret  
      params.require(:secret).permit(:context).merge(user: current_user)  
    end
    def logged?
      !current_user.nil?
    end
    def authorize
      unless logged?
        redirect_to new_session_path
      end
    end
end
