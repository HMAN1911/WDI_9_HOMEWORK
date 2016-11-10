Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/games', to 'games#index'

  get '/games/magic_8ball', to 'games#magic8ball_index'
  get '/games/magic8ball/answer', to 'games#magic8ball_answer'

  get '/games/secret_number', to 'games#secret_number_index'
  get '/games/secret_number/answer', to 'games#secret_number_answer'


end
