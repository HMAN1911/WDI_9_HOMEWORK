Rails.application.routes.draw do
  root 'games#index'

  resources :magic8ball
  resources :rockpaperscissors
  resources :secretnumber

  get '/answer', to: 'pages#answer'

end
