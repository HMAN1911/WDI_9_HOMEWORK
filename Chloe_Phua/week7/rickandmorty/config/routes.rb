Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :planets

  get '/login', to: 'session#new'
  post '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/logout', to: 'session#destroy'

  get '/register', to: 'users#new'
  post '/register', to: 'users#new'
  post '/user', to: 'users#create'


end
