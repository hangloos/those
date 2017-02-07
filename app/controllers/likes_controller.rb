class LikesController < ActionController::Base

    before_action :authenticate_user!, only: [:create]

    def create
        comment = Comment.find_by_id(params[:comment])
        like = Like.find_by(user_id: current_user.id, comment_id: comment.id)
        if !!like
          like.delete
          comment.save
          render json: { status: 'ok'}
        else
          like = Like.create(user_id: current_user.id, comment_id: comment.id)
          comment.save
          render json: { status: 'ok'}
        end
    end

end