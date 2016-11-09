Rails.application.routes.draw do

    get '/magic', to: 'magic#index'

    get '/answer', to: 'magic#answer'

end
