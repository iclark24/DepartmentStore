Rails.application.routes.draw do


  namespace :api do
    resources :departments do
      resources :items
    end
  end
  namespace :api do
    resources :items do
      resources :comments
    end
  end 
  namespace :api do
    resources :comments
  end
  get '*other', to: 'static#index'
end