Rails.application.routes.draw do
  get '/games/question', to: 'games#question'
  get '/games/answers', to: 'games#answers'

  get '/games/rockpaperscissors/:throw', to: 'games#rock_paper_scissors_play'
  get '/games/result/:throw', to: 'games#result'
  get '/games/secretnumber/:number', to: 'games#secret_number_decide'

end