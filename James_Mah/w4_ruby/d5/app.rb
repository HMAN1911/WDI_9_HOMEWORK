require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'




# result = HTTParty.get('http://omdbapi.com/?t=once')

get '/' do
  erb :index
end

get '/about' do
  @param = params[:title]
  @movie = {}
  @poster = nil

  if @param == ''
    @result = 'No movie found'
  else 
    @movie = HTTParty.get('http://omdbapi.com/?t=' + @param)

    if @movie['Response'] == 'False'
      @result = 'No movie found'
    else
      @title = @movie['Title']
      @year = @movie['Year']
      @rated = @movie['Rated']
      @released = @movie['Released']
      @runtime = @movie['Runtime']
      @genre = @movie['Genre']
      @director = @movie['Director']
      @writer = @movie['Writer']
      @actors = @movie['Actors']
      @plot = @movie['Plot']
      @language = @movie['Language']
      @country = @movie['Country']
      @awards = @movie['Awards']
      @poster = @movie['Poster']
      @metascore = @movie['Metascore']
      @imdbRating = @movie['imdbRating']
      @imdbVotes = @movie['imdbVotes']
      @imdbId = @movie['imdbId']
      @type = @movie['Type']

    end

  end

  erb :about

end