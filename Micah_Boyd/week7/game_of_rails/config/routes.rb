Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# get '/games', to: 'games#index' # list all games
get '/index', to: 'game#index'

get '/eight_ball', to: 'eight_ball#question'
get '/eight_ball/answer', to: 'eight_ball#answer'

get '/number_guess', to: 'number_guess#guess'
get '/number_guess/answer', to: 'number_guess#answer'


end
