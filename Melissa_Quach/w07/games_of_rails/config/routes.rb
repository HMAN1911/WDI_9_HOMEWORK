Rails.application.routes.draw do
  get '/games', to: 'games#index'
  get '/games/eight_ball', to: 'games#eight_ball'
  get '/games/eight_ball/:question', to: 'games#eight_ball_result'
  get '/games/secret_number', to: 'games#secret_number'
  get '/games/secret_number/:guess', to: 'games#secret_number_result'
  get '/games/rock_paper_scissors/', to: 'games#rock_paper_scissors'
  get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_result'
end
