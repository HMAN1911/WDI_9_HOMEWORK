require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'PG'


get '/' do
  erb :index
end

get '/about' do
  @movie_name = params[:movie]
  if @movie_name != nil
    # if params[:movies].length != 0
      @result = HTTParty.get('http://omdbapi.com/?t=' + @movie_name);
      @title = @result['Title']
      @year = @result['Year']
      @rated = @result['Rated']
      @poster = @result['Poster']
      @runtime = @result['Runtime']
      @genre = @result['Genre']
      @director = @result['Director']
      @writer = @result['Writer']
      @actor = @result['Actors']
      @plot = @result['Plot']
      @country = @result['Country']
      @imdb = @result['imdbRating']
      @metascore = @result['Metascore']

    # end
  end
  erb :about
end

get '/details' do
  @movie_name = params[:movie]
  @result = HTTParty.get('http://omdbapi.com/?s=' + @movie_name)
  @details = result["Search"]
  if @details.length == 1
    redirect to "/about?movie=#{@movie_name}"
  else
    erb :details
  end
end

# get 'index' do
#   erb :index
# end
