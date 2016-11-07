Rails.application.routes.draw do
  get '/games', to: 'games#index'

  get '/games/magic_8_ball', to: 'games#magic_8_ball'
  get '/games/magic_8_ball_result', to: 'games#magic_8_ball_result'

  get '/games/secret_number', to: 'games#secret_number'
  get '/games/secret_number_result', to: 'games#secret_number_result'

  get '/games/rock_paper_scissors', to: 'games#rock_paper_scissors'
  get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play'
end
