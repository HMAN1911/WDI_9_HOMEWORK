Rails.application.routes.draw do
  get '/', to: 'magic#index'

  get '/magic', to: 'magic#question'
  post '/magic/answer', to: 'magic#answer'

  get '/secret', to: 'secret#numbers'
  post '/result', to: 'secret#result'

  get '/rps', to: 'rps#index'
end
