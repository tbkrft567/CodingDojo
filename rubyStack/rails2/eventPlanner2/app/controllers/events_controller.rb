class EventsController < ApplicationController
  def create
    @event = Event.new(secureEvent)
    if @event.valid?
      @event.save
    else
      flash[:alert] = @event.errors.full_messages
    end      
    redirect_to events_index_path
  end
  
  def show
    @event = Event.find_by(id: params[:id])
    if @event
      @comments = Comment.all
    else
      redirect_to events_index_path
    end
  end

  def edit
  end

  def update

  end

  def destroy
    @event = Event.find_by(id:params[:id])
    if @event && @event.user = current_user
      @event.destroy
    else
      flash[:notice] = ['Only the creator can remove the event']
    end      
    redirect_to events_index_path
  end

  def index
    @user = current_user
    @events = Event.all
  end
end
