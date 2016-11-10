Rails.application.routes.draw do

  get '/', to: 'planets#index'
  get '/planets/new', to: 'planets#new'
  get '/planets/:id', to: 'planets#show'
  post '/planets', to: 'planets#create'
  get '/planets/:id/edit', to: 'planets#edit'
  patch '/planets/:id', to: 'planets#update'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

end
