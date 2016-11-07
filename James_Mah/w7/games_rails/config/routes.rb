Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/games/magic_8_ball', to: 'games#magic_8_ball'
  get '/games/magic_8_ball_result', to: 'games#magic_8_ball_result'

  get '/games/secret_number', to: 'games#secret_number'
  get '/games/secret_number_decide', to: 'games#secret_number_decide'
  get '/games/secret_number_win', to: 'games#secret_number_win'
  get '/games/secret_number_lose', to: 'games#secret_number_lose'

  get '/games/rock_paper_scissors/:throw', to: 'games#rock_paper_scissors_play'
  get '/games/rock_paper_scissors_decide/:p1', to: 'games#rock_paper_scissors_decide'
  get '/games/rock_paper_scissors_p1_wins', to: 'games#rock_paper_scissors_p1_wins'
  get '/games/rock_paper_scissors_p2_wins', to: 'games#rock_paper_scissors_p2_wins'
  get '/games/rock_paper_scissors_draw', to: 'games#rock_paper_scissors_draw'

end
