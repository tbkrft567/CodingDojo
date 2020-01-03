Rails.application.routes.draw do
  get '/', to: 'users#new'
  post 'comment/create'

  post 'events/create'

  get 'events/show'

  get 'events/edit'

  patch 'events/update'

  delete 'events/destroy'

  get 'events/index'

  post 'sessions/create'

  delete 'sessions/destroy'

  get 'users/new'

  get 'users/edit'

  patch 'users/update'

  get 'users/destroy'

  post 'users/create'

  # match '*path' => redirect('/users/new'), via: :get
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
