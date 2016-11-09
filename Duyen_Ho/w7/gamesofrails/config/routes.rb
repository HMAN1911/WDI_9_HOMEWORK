Rails.application.routes.draw do

  get '/', to: 'games#index'

  # Magic 8 Ball
  get '/games/magic_8_ball', to: 'magic#question'
  post '/games/magic_8_ball', to: 'magic#answer'

  # Secret Number
  get '/games/secret_number', to: 'secret#guess'
  post '/games/secret_number', to: 'secret#result'

  # Rock Paper Scissors
  get '/games/rock_paper_scissors/:throw', to: 'rock#throw'
  post '/games/rock_paper_scissors/play', to: 'rock#play'

end
