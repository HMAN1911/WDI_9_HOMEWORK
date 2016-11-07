Rails.application.routes.draw do

  get '/', to: 'pages#index'

  get '/8ball', to: 'eight_ball#index'
  post '/8ball', to: 'eight_ball#answer'

end
