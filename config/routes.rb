Rails.application.routes.draw do
  root 'application#index'

  devise_for :users
  
  resources :reviews, only: [:create, :destroy, :update, :index, :show] do 
    resources :comments do
      resources :likes
    end
  end

  resources :users, only: [:show, :edit]
end
