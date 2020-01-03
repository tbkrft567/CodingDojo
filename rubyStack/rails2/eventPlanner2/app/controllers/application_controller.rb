class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authorize
  skip_before_action :authorize, only: [:create, :new]
  
  private
    def current_user
      User.find_by(id: session[:user_id]) if session[:user_id]
    end
    def secureUser
      params.require(:user).permit(:first_name, :last_name, :email, :location, :state, :password, :password_confirmation)
    end
    def secureEvent
      params.require(:event).permit(:name, :date, :location, :state).merge(user: current_user)
    end
    def secureComment
      @event = Event.find_by(id: params[:id])
      params.require(:comment).permit(:comment).merge(user: current_user, event: @event)
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
