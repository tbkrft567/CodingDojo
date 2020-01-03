class CoursesController < ApplicationController
  before_action :authorize
  
  def new
  end

  def create
    @course = Course.new(secureCourse)
    if @course.valid?
      @course.save
      redirect_to courses_index_path
    else
      flash[:alert] = @course.errors.full_messages
      redirect_to courses_new_path
    end
  end

  def index
    @user = current_user
    @signups = Signup.all
    courses = Course.all
    if params[:sort].nil?
      params[:sort] = 0
    end
    
    if params[:sort] == "0"
      @courses = courses.sort_by { |course| course.signups.count }
    else
      @courses = courses.sort_by { |course| course.signups.count }.reverse
    end
  end

  def edit
    @course = Course.find_by(id: params[:id])
  end

  def update
    @course = Course.find_by(id: params[:id])
    @course.update(secureCourse)
    if @course.valid?
      redirect_to courses_index_path
    else
      flash[:alert] = @course.errors.full_messages
      redirect_to courses_edit_path(id: params[:id])
    end
  end

  def show
    @course = Course.find_by(id:params[:id])
    signups = Signup.where(course: @course)
    if params[:sort].nil?
      params[:sort] = "0"
    end
    
    if params[:sort] == "0"
      @signups = signups.sort_by { |signup| signup.created_at }
    else
      @signups = signups.sort_by { |signup| signup.created_at }.reverse
    end
    @user= current_user
  end
  
  def destroy
    @course = Course.find_by(id: params[:id])
    @course.destroy
    redirect_to courses_index_path
  end
end
