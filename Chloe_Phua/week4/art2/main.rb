require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/art'
require_relative 'models/user'

#create main page for all artwork
#create unique page for each artwork
#on unique page, create edit and delete buttons
#create edit page which redirects to unique page
#include user functionality by enabling sessions and adding helpers

require 'pry'

enable :sessions

helpers do
  def logged_in?
    !!current_user
  end

  def current_user
    if session[:user_id] = nil;
    User.find(session[:user_id])
  end
  end
  #if you call this method while not logged in, it'll break your app
end

#display all artworks
get '/' do
  @arts = Art.all;

  erb :index

end

#create new art
get '/collection/new' do

  erb :art_new
end

#submit new art_new
post '/collection' do

  @newart = Art.new
  @newart.name = params[:title]
  @newart.artist = params[:artist]
  @newart.image_url = params[:image_url]
  if @newart.save
    redirect to '/'
  else erb :art_new
  end

end


#display unique art page
get '/collection/:id' do
  @art = Art.find(params[:id])

  erb :art_piece
end

#edit unique art page
get '/collection/:id/edit' do
  @art = Art.find(params[:id])

  erb :art_edit
end

#update unique art page
post '/collection/:id' do
  @art = Art.find(params[:id])
  @art.update(name: params[:title], image_url: params[:image_url], artist: params[:artist])

  redirect to "/collection/#{params[:id]}"
end

#delete dish
post '/collection/:id/delete' do
  delete = Art.find_by(id: params[:id])

  delete.destroy
  redirect to '/'
end

get '/session/new' do

  erb :session_new
end

post '/session' do
  user = User.find_by(email: params[:email])

  if user && user.authenticate(params[:password])
    #u are fine, lemme create a session for u
    session[:user_id] = user.id

    redirect to '/'
  else #whoaare you
    erb :session_new
  end
end

# get '/session/register' do
#   erb :session_register
# end
#
# post '/session' do
#   user = User.new(email: params[:email])
#   user.password = params[:password]
#   user.save
#   erb '/'
# end

delete '/session' do
  session[:user_id] = nil
  #remove the session
  redirect to '/session/new'
end
