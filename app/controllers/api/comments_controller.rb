class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]
  before_action :set_item, only: [:create]

  def create
    comment = @item.comments.new(comment_params)

    if comment.save
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment.destroy
  end

  private
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_item
      @item = Item.find(params[:item_id])
    end

    def comment_params
      params.require(:comment).permit(:title, :body, :rating, :item_id)
    end
end
