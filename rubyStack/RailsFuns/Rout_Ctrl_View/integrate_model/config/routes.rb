Rails.application.routes.draw do
  get '/users/total', to: 'users#total'
  get 'users/test/:test', to: 'users#test'
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
