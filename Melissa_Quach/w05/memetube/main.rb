require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/video'

get '/' do
  @videos = Video.all
  erb :index
end
