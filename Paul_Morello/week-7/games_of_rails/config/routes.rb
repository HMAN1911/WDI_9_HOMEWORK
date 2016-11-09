Rails.application.routes.draw do

  get '/', to: 'games#index'
  # get '/games', to: 'games#index'

  get 'games/magic_8_ball', to: 'games#magic_play'
  post 'games/magic_ask', to: 'games#magic_ask'


  get 'games/secret_number', to: 'games#secret_number_play'
  post 'games/secret_number_guess', to: 'games#secret_number_guess'

  get 'games/rock_paper_scissors', to: 'games#rock_paper_scissors_play'
  post 'games/rock_paper_scissors_result', to: 'games#rock_paper_scissors_result'

end
