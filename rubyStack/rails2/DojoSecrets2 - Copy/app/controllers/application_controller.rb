class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user
  private
    def new_user  
      params.require(:user).permit(:name, :email, :password, :password_confirmation)  
    end
end
