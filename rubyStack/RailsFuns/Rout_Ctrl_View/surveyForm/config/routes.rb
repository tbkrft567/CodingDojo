Rails.application.routes.draw do
  get 'user/index'

  get 'user/create'

  post 'user/new', to: 'user#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
