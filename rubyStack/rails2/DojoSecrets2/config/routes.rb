Rails.application.routes.draw do
  get 'secrets/index'
  delete "/likes/:secret_id", to: "likes#destroy"
  patch "/likes/:secret_id", to: "likes#update"
  # get "/sessions/logout", to: "sessions#new"
  delete "/sessions/logout", to: "sessions#logout"
  patch "/users/edit", to: "users#update"
  patch "/users/", to: "sessions#update"
  resources :users, :sessions, :secrets, :likes
  # match '*path', to: redirect('/secrets/index'), via: :get
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
