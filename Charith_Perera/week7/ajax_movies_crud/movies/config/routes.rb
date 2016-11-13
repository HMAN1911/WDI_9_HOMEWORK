Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'movies#index'
  get '/login', to: 'session#index'
  post '/login', to: 'session#login'
  get '/logout', to: 'session#logout'

  post '/add-movie', to: 'movies#add_movie'
  get '/show-movie', to: 'movies#show_movie'
  delete '/delete-review', to: 'movies#delete_review'
  get '/more-reviews', to: 'movies#more_movies'
end
