Rails.application.routes.draw do
  get 'secrets/index'

  get 'users/new'

  get 'users/show'

  get 'users/edit'

  get 'sessions/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :sessions
  resources :secrets
end
