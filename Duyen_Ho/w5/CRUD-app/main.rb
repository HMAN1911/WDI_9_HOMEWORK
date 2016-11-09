require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require_relative 'db_config'
require_relative 'models/artwork'
require_relative 'models/artwork_type'
require_relative 'models/user'
require_relative 'models/comment'


# home - show all artworks
get '/' do
  @artworks = Artwork.all
  # binding.pry
  erb :index
end

# C: form to upload new artwork
get '/artworks/new' do
  erb :artworks_new
end

# C: to post new artwork
post '/artworks' do
  artwork = Artwork.new
  artwork.title = params[:title]
  artwork.artist = params[:artist]
  artwork.image_url = params[:image_url]

  if artwork.save
    redirect to '/'
  else
    erb :artworks
  end

end

# R: to show artwork on own page
get '/artworks/:id' do
  @artwork = Artwork.find(params[:id])
  erb :artworks_show
end

# U: to show the edit form
get '/artworks/:id/edit' do
  @artwork = Artwork.find(params[:id])
  erb :artworks_edit
end

# U: to update edits
post '/artworks/:id' do
  artwork = Artwork.find(params[:id])
  artwork.title = params[:title]
  artwork.artist = params[:artist]
  artwork.image_url = params[:image_url]

  if artwork.save
    redirect to "/artworks/#{ params[:id] }"
  else
    erb :artworks_show
  end
end

# D: to delete the artwork
delete '/artworks/:id/delete' do
  artwork = Artwork.find(params[:id])
  artwork.delete
  # destroy method has before and after callbacks

  redirect to '/'
end
