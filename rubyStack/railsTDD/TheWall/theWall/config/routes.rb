Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/users/signin', to: 'users#signin'
  get '/messages/logout', to: 'messages#logout'
  resources :users
  resources :messages
end
