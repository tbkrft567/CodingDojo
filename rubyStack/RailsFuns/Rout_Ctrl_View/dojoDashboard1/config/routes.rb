Rails.application.routes.draw do
  get 'dojos/index'
  get 'dojos/new', to: 'dojos#new'
  post 'dojos/create', to: 'dojos#create'
  get 'dojos/:id', to: 'dojos#show'
  get 'dojos/:id/edit', to: 'dojos#edit'
  patch 'dojos/:id', to: 'dojos#update'
  delete 'dojos/:id', to: 'dojos#destroy'

  get '/dojos/:id/students/new', to: 'students#new'
  post '/dojos/:id/students/create', to: 'students#create'
  get '/dojos/:id/students/:student_id', to: 'students#show'
  get '/dojos/:id/students/:student_id/edit', to: 'students#edit'
  patch '/dojos/:id/students/:student_id', to: 'students#update'
  delete '/dojos/:id/students/:student_id', to: 'students#delete'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
