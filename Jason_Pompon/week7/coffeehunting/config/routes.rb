Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cafes
  resources :users
  resources :session
  get '/logout' => 'session#destroy'
end
