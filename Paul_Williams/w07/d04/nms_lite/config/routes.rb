Rails.application.routes.draw do

  get '/', to: 'planets#index'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

end
