require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/dish2'

#show all dishes
get '/' do
  @dishes = Dish.all
  erb :index
end

#shows the make new dish form
get '/dishes/new' do
  erb :dishes_new
end

#creates the dish only
post '/dishes' do
  @dish = Dish.create(name: "#{params[:name]}", image_url: "#{params[:image_url]}")
  redirect to '/'
end

#show a single dish
get '/dishes/:id' do
  @dish = Dish.find("#{ params[:id] }")
  erb :dishes_show
end

#show edit a dish form
get '/dishes/:id/edit' do
  @dish_edit = Dish.find("#{ params[:id] }")
  erb :dishes_edit
end

#post the update when click udpate button
post '/dishes/:id' do
  @dish = Dish.find("#{ params[:id] }")
  @dish.update(name: "#{params[:name]}", image_url: "#{params[:image_url]}")
  redirect to '/'
end

#delete the dishes
post '/dishes/:id/delete' do
  @dish = Dish.find("#{ params[:id] }")
  @dish.destroy
  redirect to '/'
end
