Rails.application.routes.draw do
  get '/', to: 'users#new'
  post 'signups/create'

  delete 'signups/destroy'

  get 'courses/new'

  post 'courses/create'

  get 'courses/index'

  get 'courses/edit'

  patch 'courses/update'
  delete 'courses/destroy'

  get 'courses/show'

  post 'sesssions/create'

  delete 'sesssions/destroy'

  get 'users/new'

  post 'users/create'
  match '*path' => redirect('/users/new'), via: :get
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
