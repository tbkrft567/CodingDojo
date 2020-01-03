class UsersController < ApplicationController
   def test
      puts params[:test]
      render text: params[:test]
   end


   def total
      _Count = User.all.count
      render text: _Count.to_s
   end
   def index
      render json: User.all
   end
   def new
      
   end
   def show
      puts params[:id]
      render json: User.find(params[:id])
   end
   def edit
      puts params[:id]
      @users = User.find(params[:id])
      puts @users
   end
   def create
      puts params[:newUser]
      User.create(name:params[:newUser])
      redirect_to "/users"
      # render text: "Here I am " + params[:newUser].to_s
   end

end
