class SecretsController < ApplicationController
  protect_from_forgery with: :null_session 
  before_action :authorize
  
  def index
    @secrets = Secret.all
    @likes = Like.all
    @current_user = current_user
  end

  def create
    @secret = Secret.new(new_secret) 
    if @secret.valid? #Does the secret met database validation?
      @secret.save
      redirect_to user_path(current_user.id.to_s)
    else
      flash[:alert] = @secret.errors.full_messages
      redirect_to user_path(current_user.id.to_s)
    end
  end 
  
  def destroy
    @removeSecret = Secret.find_by(id: params[:id])
    if @removeSecret && @removeSecret.user == current_user #Does the secret exist and is the current user the creator?
      @removeSecret.destroy
      redirect_back(fallback_location: secret_path)
    else
      flash[:alert] = ['This secret cannot be deleted']
      redirect_back(fallback_location: secret_path)
    end
  end
end
