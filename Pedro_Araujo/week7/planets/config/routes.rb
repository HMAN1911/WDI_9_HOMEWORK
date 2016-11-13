Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :stars
  resources :planets
  resources :satellites
  resources :users

  # --------- SESSION ----------
  get '/session/new', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/logout', to: 'session#destroy'



end
