require 'sinatra'
require "sinatra/reloader"
require "pry"
require_relative 'db_config'
require_relative 'models/planet'

get '/' do
  @planets = Planet.all
  erb :index
end

get '/new' do
  erb :new_planet
end

get '/planets' do
  created_planet = Planet.new
  created_planet.name = params[:name]
  created_planet.moons = params[:moons]
  created_planet.image_url = params[:image_url]
  created_planet.description = params[:description]
  created_planet.save
  redirect to '/'
end

get '/planets/:id' do
  @planet = Planet.find(params[:id])
  erb :planet
end

get '/planets/:id/edit' do
  @planet = Planet.find(params[:id])
end

post '/planets/:id/edit' do
  edited = Planet.find(:id)
  edited.name = params[:name]
  edited.moons = params[:moons]
  edited.image_url = params[:image_url]
  edited.description = params[:description]
  edited.save
  erb :edit_planet
end

post '/planets/:id/delete' do
  deleted = Planet.find(params[:id])
  deleted.destroy
  redirect to '/'
end
