Rails.application.routes.draw do
  get 'secrets/index'

  delete "/sessions/logout", to: "sessions#logout"
  patch "/users/edit", to: "users#update"
  resources :users
  resources :sessions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
