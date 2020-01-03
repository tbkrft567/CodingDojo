class SignupsController < ApplicationController
  before_action :authorize
  
  def create
    course = Course.find_by(id: params[:id])
    @signup = Signup.new(user: current_user, course: course)
    if @signup.valid?
      if Signup.where(course: course).length < course.capacity
        @signup.save
      else
        flash[:alert] = ['Capacity for this class has been reached']
      end 
    else
      flash[:alert] = @signup.errors.full_messages
    end
    redirect_to courses_index_path
  end

  def destroy
    course = Course.find_by(id: params[:id])
    signups = Signup.where(user: current_user).where(course: course)
    if signups
      signups.destroy_all
    else
      flash[:alert] = ['No has been removed']
    end
    redirect_to courses_show_path(id: params[:id])
  end
end
