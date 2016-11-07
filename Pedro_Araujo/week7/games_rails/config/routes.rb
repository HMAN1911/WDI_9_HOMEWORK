Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


# Magic 8 ball
 get '/magic8/question', to: 'magic8#question'
 get '/magic8/answer', to: 'magic8#answer'

# Secret Number

 get '/secret/guess', to: 'secret#guess'
 get '/secret/result', to: 'secret#result'
 get '/secret/win', to: 'secret#win'
 get '/secret/lose', to: 'secret#lose'

# Rock Paper Scissors


end
