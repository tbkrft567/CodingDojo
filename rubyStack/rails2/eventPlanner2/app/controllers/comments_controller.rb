class CommentsController < ApplicationController
  def create
    @comment = Comment.new(secureComment)
    if @comment.valid?
      @comment.save
    else
      flash[:alert] = @comment.errors.full_messages
    end
    redirect_to events_show_path(id: params[:id])
  end
end
