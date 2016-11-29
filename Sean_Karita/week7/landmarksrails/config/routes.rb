Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/landmarks', to: 'landmarks#index'   # list all landmarks
  #
  # get '/landmarks/new', to:'landmarks#new'  # get new landmark form
  # post '/landmarks', to: 'landmarks#create' # create new landmark
  #
  # get '/landmarks/:id/edit', to:'landmarks#edit'  # get edit landmark form
  # patch '/landmarks/:id', to: 'landmarks#update'  # update existing landmark
  #
  # delete '/landmarks/:id', to 'landmarks#destroy' # delete existing landmark
  # get '/landmarks/:id', to: 'landmarks#show' # show single landmark

resources :landmarks
resources :users

get '/session', to: 'session#new'
post '/session', to: 'session#create'
delete '/session', to: 'session#destroy'

end
