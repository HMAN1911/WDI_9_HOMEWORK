Rails.application.routes.draw do
  root 'games#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/magic8ball', to: 'magic#play'
  post '/magic8ball', to: 'magic#ask'

  get '/secretnumber', to: 'secret#play'
  post '/secretnumber', to: 'secret#result'

  get '/rps', to: 'rps#index'
  post "/rps/#{@throw}", to: 'rps#play'

end
