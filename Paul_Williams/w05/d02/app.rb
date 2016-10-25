require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  erb :index
end
