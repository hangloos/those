class UsersController < ApplicationController
before_action :authenticate_user!, only: [:edit, :show]

  def show
      render json: User.eager_load(:comments).find(params[:id])
  end

  def edit
  end

  

end