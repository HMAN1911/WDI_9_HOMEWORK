require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require_relative 'db_config'
require_relative 'models/user'
require_relative 'models/character'

enable :sessions

helpers do

  def logged_in?
    !!current_user
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end

# Home page

get '/' do
  if logged_in?
    @characters = Character.where(user_id: session[:user_id])
  end
  erb :index
end

# User connection routes

# Make a new user
post '/user/new' do
  user = User.new
  user.username = params[:username]
  user.email = params[:email]
  user.password = params[:password]
  if user.save
    session[:user_id] = user.id
  end
  redirect to '/'
end

# Log in an existing user
post '/session' do
  user = User.find_by(username: params[:username])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect to '/'
  else
    erb :session_new
  end
end

# Log out the user
delete '/session' do
  session[:user_id] = nil
  redirect to '/'
end

# Character routes

# Get new character page
get '/characters/new' do
  erb :new_character
end

# Save character
post '/characters' do
  character = Character.new
  character.name = params[:name]
  character.gender = params[:gender]
  character.age = params[:age]
  character.save
  redirect to '/'
end

# Show character details
get '/characters/:id' do
  results = run_sql("SELECT * FROM characters WHERE id=#{params[:id]};")
  @character = results[0]
  erb :show_character
end

# Edit character form
get '/characters/:id/edit' do
  @character = run_sql("SELECT * FROM characters WHERE id=#{params[:id]};")[0]
  erb :edit_character
end

# Update existing character
post '/characters/:id' do
  run_sql("UPDATE characters SET name='#{params['name']}', gender='#{params[:gender]}',
  age= #{params[:age]} WHERE id=#{params[:id]};")
  redirect to "/characters/#{params[:id]}"
end

# Kill chracter
post '/characters/:id/delete' do
  run_sql("DELETE FROM characters WHERE id=#{params[:id]};")
  redirect to '/'
end
