require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

get '/' do
  erb :index
end
