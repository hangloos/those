class LikesController < ActionController::Base

    before_action :authenticate_user!, only: [:create, :delete]

    def create
        comment = Comment.find_by_id(params[:comment])
        like = comment.likes.build(user_id: current_user.id)
          if like.save
              render json: { status: 'ok'}
          else
              render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
          end
    end

    def destroy
      like = like.find_by_id(params[:like][:id])
            if like.user == current_user
            like.delete
            render json: { status: 'ok'}
            else
            render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
            end
    end



end