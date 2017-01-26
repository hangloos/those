class CommentsController < ActionController::Base

    before_action :authenticate_user!, only: [:create, :delete]


    def show
      render json: Comment.eager_load(:likes).find(params[:id])
    end

    def index
      render json: Review.eager_load(:likes,:comments).find_by_id(params[:review_id])
    end

    def update
      comment = Comment.find(params[:id])
      comment.update(comment: params[:comment])
      if comment.save
              render json: { status: 'ok'}
          else
              render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
          end
    end

    def create
    review = Review.find_by_id(params[:id])
    comment = current_user.comments.build(comment: params[:comment], review_id: review.id)
          if comment.save
              render json: { status: 'ok'}
          else
              render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
          end
    end

    def destroy
      comment = Comment.find_by_id(params[:comment][:id])
            if comment.user == current_user
            comment.delete
            render json: { status: 'ok'}
            else
            render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
            end
    end



end