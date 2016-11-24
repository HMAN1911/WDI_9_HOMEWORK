Rails.application.routes.draw do
  get 'likes/create'

  resources :planets
  resources :users

  get    '/signup',  to: 'users#new'
  # post   '/signup',  to: 'users#'

  get    '/login',   to: 'session#new'
  post   '/login',   to: 'session#create'
  delete '/logout',  to: 'session#destroy'

  get '/api/planets', to: 'api/planets#index'
  post '/api/likes', to: 'api/likes#create'

end
