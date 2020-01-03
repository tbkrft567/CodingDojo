Rails.application.routes.draw do
  resources :products
  get 'products/index'
  
  get 'products/new'

end
