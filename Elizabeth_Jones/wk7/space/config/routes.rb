Rails.application.routes.draw do

  #paths for Planets
  resources :planets

  #paths for users
  resources :users

  #paths for session
  #could change this to '/login' if you want to or '/session/new'
  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/logout', to: 'session#destroy'

  post '/comments', to: 'comments#create'

end
