Rails.application.routes.draw do
  get '/games', to: 'games#index'
  get '/games/eight_ball', to: 'games#eight_ball'
  get '/games/secret_number', to: 'games#secret_number'
  get '/games/rock_paper_scissors/', to: 'games#rock_paper_scissors'
  get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play'
end
