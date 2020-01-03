Rails.application.routes.draw do
  resources :users

  # get "products" => "products#index"
  # get "products/new" => "products#new"
  # post "products" => "products#create"
  # get "products/:id" => "products#show"
  # get "products/:id/edit" => "products#edit"
  # patch "products/:id" => "products#update"
  # delete "products/:id" => "products#destroy"
  # get "users/index" => "users#index"

  get '/hello', to: 'users#hello'
  get '/say/hello', to: 'users#sayHello'
  get '/say/hello(/:name)', to: 'users#test'
  get 'bye/bye/jimmy', to: 'users#bye'
  get 'bye/bye/jack', to: 'users#byeyou'
  get '/', to: 'users#index'
  get '/times', to: 'users#times'
  get '/times/restart', to: 'users#reset'


end
