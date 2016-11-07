Rails.application.routes.draw do


  get '/games/magic_8_ball', to: 'games#magic_8_ball'
  post '/games/magic_8_ball', to: 'games#answer'
  post 'games/answer', to: 'games#answer'


  get 'games/secret_number', to: 'games#secret_number'

  get 'games/rock_paper_scissor', to: 'games#rock_paper_scissor'


end
