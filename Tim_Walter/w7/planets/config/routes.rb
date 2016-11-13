Rails.application.routes.draw do
  #7 standard crud routes
  get '/planets', to: 'planets#index'
  get '/planets/new', to: 'planets#new'
  get '/planets/:id', to: 'planets#show'
  post '/planets/create', to: 'planets#create'
  get '/planets/:id/edit', to: 'planets#edit'
  patch '/planets/:id', to: 'planets#update'
  delete '/planets/:id', to: 'planets#delete'

  get '/session', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/logout', to: 'session#destroy'
  post '/session/new_user', to: 'session#new_user'

  get '/comments/:id', to: 'comments#index'
  post '/comments/:id', to: 'comments#add'

  post '/api/comments/:id', to: 'api/comments#add'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
