class UsersController < ApplicationController
  protect_from_forgery with: :null_session 
    
    def new
      @user = User.new #Used in _form.html.erb to get fields for model
    end
    
    def show
      @current_user = current_user
      @secrets = Secret.all
      @users_likes = current_user.secrets_liked
    end
    
    def edit
      @user = current_user
    end
    def update
      update_p = new_user # ! running private PARAMS security 
      @user = current_user
      @user.update(name: update_p[:name], email: update_p[:email])
      if @user.valid? # ! Does the update meet database requirements?
        redirect_to user_path(current_user.id.to_s)
      else
        flash[:alert] = @user.errors.full_messages
        redirect_to edit_user_path(current_user.id.to_s)
      end
    end
    
    def destroy
      current_user.destroy # ! destroy the database object
      reset_session
      redirect_to new_user_path
    end

    def create 
      @user = User.new(new_user) #Use private function/params for security

      if @user.valid? #Validate User prior to being added to the database
        @user.save #Create User in database
        session[:user_id] = @user.id #log user in
        redirect_to user_path(current_user.id.to_s)
      else
        flash[:alert] = @user.errors.full_messages #if not valid, ERROR and REDIRECT
        redirect_to new_user_path
      end
    end
  end