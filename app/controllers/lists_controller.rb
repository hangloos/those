class ListsController < ActionController::Base

    before_action :authenticate_user!, only: [:create, :delete]

    def create
        list = current_user.lists.find_or_create_by(name: params[:name])
          if list.save
              render json: { status: 'ok'}
          else
              render json: { errors: like.errors.full_messages },  status: :unprocessable_entity
          end
    end

   def destroy
    list = List.find_by_id(params[:list][:id])
    if list.delete
      render json: { status: 'ok'}
    else
      render json: { errors: like.errors.full_messages },  status: :unprocessable_entity
    end
   end


    def bookmark
      list = List.find(params[:id])
      review = Review.find_by_id(params[:review_id])
        if  !list.reviews.include?(review)
          list.reviews << review
        end

        if list.save
           render json: { status: 'ok'}
         else
          render json: { errors: like.errors.full_messages },  status: :unprocessable_entity
        end
    end



end