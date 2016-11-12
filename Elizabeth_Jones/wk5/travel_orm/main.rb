require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require_relative 'db_config'
require_relative 'models/trip'
require_relative 'models/comment'
require_relative 'models/user'
require_relative 'models/continent'

#method that stores the common functionality related to the db
#the reason you have to run this in every method is because
#once the server makes a new request it forgets everything else



## SESSION METHODS

enable :sessions #creates session as a global object - basically a hash

helpers do
  def logged_in?
    !!current_user #same as if/else statment below
    # if current_user
    #   true
    # else
    #   false
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
end


## GET/POST METHODS

get '/' do  #show all trips
  if params[:continent_id]
    #this shows trips of c
    @trips = Trip.where(continent_id: params[:continent_id])
  else
    @trips = Trip.all
  end
    erb :index
end

get '/trips/new' do  #shows the form only
  redirect to '/session/new' unless logged_in? #can only add entry if logged in
  @continents = Continent.all
  erb :trips_new
end

post '/trips' do  #creates the dish only
    @trip = Trip.create(name: params[:name], image_url: params[:image_url], continent_id: params[:continent_id])
    redirect to '/'
end

get '/map' do
  @continents = Continent.all
  erb :maps
end

# - to view array and hash data - type results into pry

#show single dish -  search for dish with that id
get '/trips/:id' do
  #show single dish -  search for dish with that id
  @trip = Trip.find(params[:id])
  @comments = Comment.where(trip_id: @trip['id'])
  erb :trips_show
end

#this is brings up the edit form when ever you click edit
get '/trips/:id/edit' do
  @continents = Continent.all
  @trip = Trip.find(params[:id])
  erb :trips_edit
end


#this is posting the new update when you click the update button
post '/trips/:id' do
  #sql statment to update an existing dish
  #update dishes set name = '', image_url = '' where id = 7
  @trip = Trip.find(params[:id])
  @trip.update(name: params[:name], image_url: params[:image_url], continent_id: params[:continent_id])
  redirect to "/trips/#{ params[:id] }"
end

#deletes the trip when the form/delete button is triggered
post '/trips/:id/delete' do
  @trip = Trip.find(params[:id])
  @trip.destroy
  redirect to '/'
end

#posts the comment when the form/post comment action button is triggered
post '/comments' do
  comment = Comment.create(body: params[:body], trip_id: params[:trip_id])
  redirect to "/trips/#{comment['trip_id']}"
end

get '/session/new' do
  erb :session_new
end

post '/session' do
  user = User.find_by(email: params[:email])  ##if cant find the user in the database it will return NIL
  if user && user.authenticate(params[:password])
    #you are in the database, let me create a session for you
    session[:user_id] = user.id
    redirect '/'
  else
    #not recoginised
    erb :session_new
  end
end

delete '/session' do
  #clearing the session
  session[:user_id] = nil
  redirect to '/session/new'
end
