Rails.application.routes.draw do

  get '/', to: 'planets#index'
  get '/planets/:id', to: 'planets#show'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

end
