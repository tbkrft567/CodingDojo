Rails.application.routes.draw do
  post 'comments/:id/create', to: 'comments#create'

  get 'attendances/:id/create', to: 'attendances#create'

  get 'events/index', to: 'events#index'

  get 'events/new', to: 'events#new'

  post 'events/create', to: 'events#create'

  # get 'events/:id/editter', to: 'events#editter'
  get 'events/:id/edit', as: 'events#edit'

  get 'events/:id', to: 'events#show'
  get 'events/:id/find', to: 'events#find'

  patch 'events/:id/update', to: 'events#update'

  get 'events/:id/destroy', to: 'events#destroy'

  get 'sessions/create', to: 'sessions#create'

  delete 'sessions/destroy', to: 'sessions#destroy'

  get 'users/', to: 'users#index'
  get 'users/index', to: 'users#index'

  get 'users/new', to: 'users#new'

  post 'users/create', to: 'users#create'

  get 'users/edit', to: 'users#edit'

  patch 'users/update', to: 'users#update'

  delete 'users/destroy', to: 'users#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
