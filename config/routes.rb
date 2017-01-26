Rails.application.routes.draw do
  root 'application#index'

  devise_for :users
  
  resources :reviews, only: [:create, :destroy, :update, :index, :show] do 
    resources :comments, only: [:create, :destroy, :show, :index, :update] do
      resources :likes, only: [:create, :destroy]
    end
  end

  resources :lists, only: [:create, :destroy, :update, :index, :show]

  resources :users, only: [:show, :edit]

  post '/bookmark' => 'lists#bookmark'
end
