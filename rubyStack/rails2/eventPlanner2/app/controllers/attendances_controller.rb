class AttendancesController < ApplicationController
  def create
    event = Event.find_by(id: params[:id]) 
    p params[:id]
    @attendance = Attendance.new(user: current_user,event: event)
    if @attendance.valid?
      p "create"
      @attendance.save
    else
      p "error"
      flash[:notice] = @attendance.errors.full_messages
    end
    redirect_to events_index_path
  end

  def destroy
    event = Event.find_by(id: params[:id]) 
    @attendance = Attendance.find_by(user: current_user, event: event)
    if @attendance && @attendance.user == current_user
      @attendance.destroy
    else
      flash[:notice] = ['You have not joined this event']
    end
    redirect_to events_index_path
  end
end
