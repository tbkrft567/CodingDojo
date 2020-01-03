class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authorize
  skip_before_action :authorize, only: [:create, :new], except: :events_controller

    def secureUser
      params.require(:user).permit(:first_name, :last_name, :email, :location, :state, :password, :password_confirmation)
    end
    def current_user
      User.find_by(id:session[:user_id]) if session[:user_id]
    end
    def logged?
      !current_user.nil? 
    end
    def authorize
      unless logged?
        redirect_to users_new_path
      end
    end

    # helper_method :authorize

end
