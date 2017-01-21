class CommentsController < ActionController::Base

def create
  #need to use current user here as well to know who creates the comment
  review = Review.find_by_id(params[:id])
  #change the user_id portion when get login setup
  comment = review.comments.build(comment: params[:comment], user_id: 4)
        if comment.save
            render json: { status: 'ok'}
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
  end



end