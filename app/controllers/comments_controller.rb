class CommentsController < ActionController::Base

  before_action :authenticate_user!, only: [:create]

  def create
  
  review = Review.find_by_id(params[:id])
  comment = review.comments.build(comment: params[:comment], user_id: current_user.id)
        if comment.save
            render json: { status: 'ok'}
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
  end

  def destroy
    comment = Comment.find_by_id(params[:comment][:id])
          if comment.delete
          render json: { status: 'ok'}
          else
          render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
          end
  end



end