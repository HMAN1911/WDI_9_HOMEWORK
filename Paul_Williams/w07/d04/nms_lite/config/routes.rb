Rails.application.routes.draw do

  get '/', to: 'session#index'
  post '/session/new', to: 'session#create'
  
end
