class AttendancesController < ApplicationController

   def create
      @user = current_user
      @event = Event.find_by(id: params[:id])
      @rsvps = Attendance.where(user: current_user).exists?(event: @event)
      unless @rsvps
         Attendance.create(user: @user, event: @event)
         redirect_to events_index_path
      else
         flash[:notice] = ["You have RSVP'd"]
         redirect_to events_index_path
      end
    end
  
end
