Rails.application.routes.draw do

  get '/', to: 'pages#index'

  get '/8ball', to: 'eight_ball#index'
  post '/8ball', to: 'eight_ball#answer'

  get '/secret_number', to: 'secret_number#index'
  post '/secret_number', to: 'secret_number#answer'

  get '/rock_paper_scissors', to: 'rock_paper_scissors#index'
  get '/rock_paper_scissors/:throw', to: 'rock_paper_scissors#play'

end
