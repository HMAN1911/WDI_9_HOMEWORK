require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require_relative 'db_config'
require_relative 'models/movie'

get '/index' do
  erb :index
end


get '/results' do

  # mydb_search = Movie.find_by(imdbID: params[:imdbID])
  #
  # if mydb_search !== nil
  #   @movie_title = mydb_search.title
  #
  #   erb :about
  # else
  #

  @user_input = params[:movies]
  @movie = HTTParty.get('http://omdbapi.com/?s=' + "#{@user_input}")
  @movie_results = @movie["Search"]

  # @movie_title = omdb_movie.title
  # if movie !== nil

  # @movie_id =
  # binding.pry
  erb :results

end


# #creates the dish only
# post '/dishes' do
#   @dish = Dish.create(name: params[:name], image_url: params[:image_url], dish_type_id: params[:dish_type_id])
#   #API call code here
#   redirect to '/'
#
#   # if
#   # if dish.save
#   #   redirect to '/'
#   # else
#   #   erb: dishes_new
#   # end
# end


###HOW TO STORE INFO IN A HASH

#dish = dish.new(params  ['name']    )
#
# movie = movie.new(title: ombdhash[:title], director: ombdhash[:director])
#
# do the same as this one
#     @dish = Dish.create(name: params[:name], image_url: params[:image_url], dish_type_id: params[:dish_type_id])
#
#

get '/about_single' do
  imdbID = params["banana"]
  @movie = HTTParty.get('http://omdbapi.com/?i=' + "#{imdbID}")
  @movie_title = 'Title: ' + @movie["Title"]
  @movie_director = 'Director: ' + @movie["Director"]
  @movie_year = 'Year: ' + @movie["Year"]
  @movie_plot = 'Plot: ' + @movie["Plot"]
  @movie_rated = 'Rating: ' + @movie["Rated"]
  @movie_actors = 'Actors: ' +  @movie["Actors"]
  @movie_poster = @movie["Poster"]
  @movie_array = []
  @movie_array = @movie_array.push(@movie_title, @movie_director, @movie_year, @movie_plot, @movie_rated, @movies_actors)

  omdb_movie = Movie.create(title: @movie["Title"], director: @movie["Director"], year: ["Year"], plot: @movie["Plot"], rating: @movie["Rated"])


  @message = ""
  erb :about_single
end
