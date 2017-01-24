class LikesController < ActionController::Base

    before_action :authenticate_user!, only: [:create, :delete]

    def create
        comment = Comment.find_by_id(params[:comment])
        l = Like.where("user_id = ? AND comment_id =?", current_user.id,comment.id)
        like = comment.likes.build(user_id: current_user.id)
          if !l[0] && like.save
              render json: { status: 'ok'}
          else
              flash[:error] = 'You already likes this comment'
              render json: { errors: like.errors.full_messages },  status: :unprocessable_entity
          end
    end

    def destroy
      binding.pry
      like = like.find_by_id(params[:like][:id])
            if like.user == current_user
            like.delete
            render json: { status: 'ok'}
            else
            render json: { errors: like.errors.full_messages }, status: :unprocessable_entity
            end
    end



end