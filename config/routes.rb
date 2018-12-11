Rails.application.routes.draw do


  namespace :api do
    resources :departments do
      resource :items
    end
  end
  namespace :api do
    resources :items
  end 
  get '*other', to: 'static#index'
end