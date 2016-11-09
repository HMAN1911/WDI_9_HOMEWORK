require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require_relative 'db_config'
require_relative 'models/diagram'
# require_relative 'models/comment'
# require_relative 'models/diagram_type'
require_relative 'models/user'

enable :sessions

helpers do

  def logged_in?
    !!current_user
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end

get '/' do
  # if params[:diagram_type]
  #   @diagrams = Diagram.where(diagram_type: params[:diagram_type])
  # else
  #   @diagrams= Diagram.all
  # end
  if logged_in?
    @diagrams = current_user.diagrams
    @diagram_to_show = @diagrams.first
  end
  erb :index
end

get '/diagrams/show/:id' do
    @diagram = Diagram.find(params[:id])
    erb :diagrams_show
end

get '/diagrams/new' do
  @diagram_list = Diagram.all
  erb :diagrams_new
end

get '/diagrams/:id' do
  @diagram = diagram.find(params[:id])
  # @comments = @dish.comments
  # @comments = Comment.where(diagram_id: @diagram.id)
  erb :dishes_show
end

get '/diagrams/:id/edit' do
  @diagram = Diagram.find(params[:id])
  # @dish_types = DishType.all
  erb :diagrams_edit
end

post '/diagrams' do
  diagram = Diagram.new
  diagram_name = params[:name]
  # dish.image_url = params[:image_url]
  # dish.dish_type_id = params[:dish_type_id]

  if diagram.save
    redirect to '/'
  else
    erb :diagrams_new
  end
end

# post '/comments' do
#   comment = Comment.new
#   comment.body = params[:body]
#   comment.dish_id = params[:dish_id]
#   comment.save
#   redirect to "/dishes/#{comment.dish_id}"
# end

get '/session/new' do
  erb :session_new
end

post '/session' do
  user = User.find_by(username: params[:username])

  if user && user.authenticate(params[:password])
    # you are fine, let me create a session for you
    session[:user_id] = user.id
    redirect to '/'
  else
    # who are you
    erb :session_new
  end
end

delete '/session' do
  # clearing the session
  session[:user_id] = nil
  redirect to '/session/new'
end
