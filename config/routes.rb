Rails.application.routes.draw do
  root 'application#index'

  devise_for :users
  
  resources :reviews, only: [:create, :destroy, :update, :index, :show]

  resources :users, only: [:show, :edit]
end
