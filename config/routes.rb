Rails.application.routes.draw do
  resources :items
  devise_for :users
  root 'pages#index'
  get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :adposts
  resources :categories
  resources :sessions, only: [:new, :create, :destroy]

  namespace :api do
    namespace :v1 do
     resources :adposts
     resources :categories
     resources :users
     resources :authentication
    end
  end
end
