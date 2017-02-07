Rails.application.routes.draw do
  root 'application#index'

  devise_for :users
  
  resources :reviews, only: [:create, :destroy, :update, :index, :show] do 
    resources :review_likes, :comments, only: [:create, :destroy] do
      resources :likes, only: [:create, :destroy]
    end
  end

  resources :lists, only: [:create, :destroy]

  resources :users, only: [:show, :edit]

  post '/bookmark' => 'lists#bookmark'
  post '/remove_bookmark' => 'lists#remove_bookmark'
end
