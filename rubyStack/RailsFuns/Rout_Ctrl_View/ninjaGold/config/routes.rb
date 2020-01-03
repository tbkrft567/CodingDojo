Rails.application.routes.draw do
  get 'games/reset', to: 'games#reset'
  resources :games
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
