Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  resources :planets
  resources :users

  get '/session/new', to:'session#new'
  post '/session/', to:'session#create'
  delete '/logout', to: 'session#destroy'


end
