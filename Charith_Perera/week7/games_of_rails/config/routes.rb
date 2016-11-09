Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/magic', to: 'magic#index'
  get '/magic/answer', to: 'magic#answer'

  get '/secretnum', to: 'secret_num#index'
  get '/secretnum/guess', to:'secret_num#guess'

  get '/rockpaperscissors', to: 'rock_paper_scissors#index'
  get '/rockpaperscissors/:throw', to: 'rock_paper_scissors#throw'
end
