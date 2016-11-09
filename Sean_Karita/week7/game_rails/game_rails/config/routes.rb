Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/games', to: 'games#index'
  get '/games/magic', to: 'games#magic'
  get '/games/secret', to: 'games#secret'
  get '/games/rock_paper_scissors', to: 'games#rockPaperScissors'
  get '/games/rock_paper_scissors/:throw', to: 'games#RockPaperScissorsPlay'
end
