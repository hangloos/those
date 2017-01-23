class ReviewsController < ActionController::Base

    def index
        render json: Review.eager_load(comments: [:user]).all.as_json(include: [comments: {include: [:user]}])
    end

    def show
        render json: Review.eager_load(comments: [:user]).find(params[:id]).as_json(include: [comments: {include: [:user]}])
    end



    def create
        review = current_user.reviews.build(review_params)
        if check_admin? && review.save
            render json: { status: 'ok'}
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        review = Review.find_by_id(params[:id])
        if review.update(review_params) && check_admin?
             render json: { status: 'ok'}
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        # I need to change the current_user portion to make sure its an admin user and the same id. 
        review = Review.find_by_id(params[:id])
        #if review.user === current_user.id
        #Comment.where("review_id = ?", review.id).each{|x| x.destroy}
          if check_admin? && review.delete
          render json: { status: 'ok'}
          else
          render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
          end
      #end
    end


    private

      def check_admin?
        current_user.admin
      end

      def review_params
          params.require(:review).permit(:awards, :box_office, :director, :language, :picture_url, :production, :rated, :year, :runtime, :title, :review_type, :imdb_id, :viewing_platform, :those_movie_guys_rating, :those_movie_guys_review, :writer, :imdb_rating, :imdb_votes, :tomato_consensus_review, :tomato_user, :tomato_critics, :tomato_critics_votes, :tomato_user_votes, :tomato_url, :genres, :actors, :created_at, :updated_at, :user_id)
      end
  end