class CommentsController < ApplicationController
  def create
    @comment = Comment.new(new_comment)
    if @comment.valid?
      @comment.save
      redirect_to '/events/'+new_comment[:event].id.to_s
    else
      flash[:alert] = @comment.errors.full_messages
      redirect_to '/events/'+new_comment[:event].id.to_s
    end
  end
end
