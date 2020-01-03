class EventsController < ApplicationController
  def index
    @user = current_user
    @states= states
    @events = Event.all
    @rsvps = Attendance.all
  end

  def new
  end

  def create
    @event = Event.new(new_event)
    if @event.valid?
      @event.save
      redirect_to events_index_path
    else
      flash[:alert] = @event.errors.full_messages
      redirect_back(fallback_location: users_path)
    end
  end

  def edit
      @event = Event.find_by(id: params[:id].to_i)
      p params[:id]
      p 'yes'
      @states = states
      if @event.user == current_user
        p 'yes'
      end
      # redirect_to events_index_path
  end
  
  def update
    @event = Event.find_by(id:new_event.id)
    if @event && @event.user == current_user
      redirect_to '/events/edit'
    else
      flash[:notice] = ['You can only edit events you have created']
      redirect_to events_index_path
    end
  end

  
  def show
    @event = Event.find_by(id:params[:id])
    @comments = Comment.where(event: Event.find_by(id:params[:id]))
  end

  def find
    @event = Event.find_by(id:params[:id])
    if @event
      @event
      redirect_to '/events/' + @event.id.to_s
    else
      flash[:notice] = ['This event does not exist']
      redirect_back(fallback_location: users_path)
    end
  end
  


  def destroy
  end

end
