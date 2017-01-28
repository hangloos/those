class LikesController < ActionController::Base

    before_action :authenticate_user!, only: [:create, :delete]

    def create
        comment = Comment.find_by_id(params[:comment])
        if like = Like.find_by(user_id: current_user.id, comment_id: comment.id)
          like.delete
          comment.save
        else
          like = Like.create(user_id: current_user.id, comment_id: comment.id)
        end
          if like.save
              render json: { status: 'ok'}
          else
              render json: { errors: like.errors.full_messages },  status: :unprocessable_entity
          end
    end

end