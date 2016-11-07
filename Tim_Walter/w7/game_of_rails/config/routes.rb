Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #get url to controller / method
  get '/', to: 'magic#index'

  get '/magic', to: 'magic#index'
  post '/get_answer', to: 'magic#get_answer'

  get '/secret_num', to: 'secret_num#index'
  post '/guess', to: 'secret_num#guess'
  get '/win', to: 'secret_num#win'

  get '/rock_paper_scissors', to: 'rock_paper_scissors#index'
  post '/play', to: 'rock_paper_scissors#play'


end
