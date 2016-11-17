Rails.application.routes.draw do

  get '/games', to: 'games#index'

  get '/games/8_ball', to: 'games#show8ball'
  post '/games/8_ball', to: 'games#answer8ball'

  get '/games/secret_number', to: 'games#getSecretNumber'
  post '/games/secret_number', to: 'games#guessSecretNumber'

  get '/games/rock_paper_scissors_play', to: 'games#showRockPaperScissors'
  post '/games/rock_paper_scissors', to: 'games#guessRockPaperScissors'

end
