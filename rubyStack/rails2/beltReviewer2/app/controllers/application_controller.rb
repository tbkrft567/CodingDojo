class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    User.find_by(id:session[:user_id]) if session[:user_id]
  end
  def states
    [" AL"," AK"," AZ"," AR"," CA"," CO"," CT"," DE"," FL"," GA"," HI"," ID"," IL"," IN"," IA"," KS"," KY"," LA"," ME"," MD"," MA"," MI"," MN"," MS"," MO"," MT"," NE"," NV"," NH"," NJ"," NM"," NY"," NC"," ND"," OH"," OK"," OR"," PA"," RI"," SC"," SD"," TN"," TX"," UT"," VT"," VA"," WA"," WV"," WI"," WY"]
  end
  def new_user  
    params.require(:user).permit(:first_name, :last_name, :email, :location, :state, :password, :password_confirmation)  
  end
  def new_event  
    params.require(:event).permit(:name, :date, :location, :state).merge(user: current_user)  
  end
  def new_comment  
    params.require(:comment).permit(:comment).merge(user: current_user, event: Event.find_by(id: params[:id]))  
  end
end
