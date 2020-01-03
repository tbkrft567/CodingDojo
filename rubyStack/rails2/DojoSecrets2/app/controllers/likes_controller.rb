class LikesController < ApplicationController
      

   def destroy
      if likeExist?
         @remove_like = theLike
         @remove_like.destroy_all
         redirect_to secrets_path
      else
         flash[:alert] = ['Please like this secret before Unliking']
         redirect_to secrets_path
      end
   end
   def edit
      redirect_to secrets_path
   end 
   def update
      puts likeExist?
      unless likeExist?
         Like.create(user: current_user, secret: theSecret)
         if theSecret
            redirect_to edit_like_path(theSecret.id.to_s) 
         else
            redirect_to secrets_path
         end
      else
         flash[:alert] = ['Sorry, you can only like once']
         if theSecret
            redirect_to edit_like_path(theSecret.id.to_s) 
         else
            redirect_to secrets_path
         end
      end
   end
end

private
   def likeExist?
      Like.where(user: current_user, secret: theSecret).exists?
   end
   def theLike
      theSecret.likes.where(user:current_user)
   end
   def theSecret
      @secret = Secret.find_by(id:params[:secret_id])
      if @secret
         @secret
      else
         false
      end
   end
