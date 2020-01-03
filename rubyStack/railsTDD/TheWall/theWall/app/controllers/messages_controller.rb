require 'time'
class MessagesController < ApplicationController
   def index
      puts session[:use_id]
      # puts !!session[:use_id]
      # if !!session[:user_id]
      #    puts 'yes'
      #    # user = User.find(session[:user_id])
      #    # @username = user.username
      #    # @comments = Message.limit(3)
      # else
      #    redirect_to '/users'
      # end
      # render text: "Thank you!!"
   end
   def create
      @message = Message.create(message: params[:comment], user: User.find(session[:user_id]))
      redirect_to '/messages'
   end
   def logout
      reset_session
      redirect_to '/users'
   end
end
