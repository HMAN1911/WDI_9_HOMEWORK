require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'uri'

# result = HTTParty.get('http://omdbapi.com/?t=once')

get '/' do
  erb :index
end

get '/results' do
  @param = URI.escape(params[:title])
  @movie = {}
  @poster = nil

  open('search_history.txt', 'a') { |f|
    f.puts @param
  }
  if @param == ''
    redirect "/about?title=#{@param}"
  else 
    @movie = HTTParty.get('http://omdbapi.com/?s=' + @param)
    if @movie['Response'] == 'False'
      redirect "/about?title=#{@param}"
    elsif @movie['Search'].length == 1
      movietitle = @movie['Search'][0]['Title']
      redirect "/about?title=#{movietitle}"
    else
      @moviearray = @movie['Search']
    end
  end
  erb :results
end


get '/about' do
  @param = URI.escape(params[:title])
  @movie = {}
  @poster = nil

  if @param == ''
    @result = 'No movie found'
  else 
    @movie = HTTParty.get('http://omdbapi.com/?t=' + @param)

    if @movie['Response'] == 'False'
      @result = 'No movie found'
    else
      # @title = @movie['Title']
      # @year = @movie['Year']
      # @rated = @movie['Rated']
      # @released = @movie['Released']
      # @runtime = @movie['Runtime']
      # @genre = @movie['Genre']
      # @director = @movie['Director']
      # @writer = @movie['Writer']
      # @actors = @movie['Actors']
      # @plot = @movie['Plot']
      # @language = @movie['Language']
      # @country = @movie['Country']
      # @awards = @movie['Awards']
      @poster = @movie['Poster']
      # @metascore = @movie['Metascore']
      # @imdbRating = @movie['imdbRating']
      # @imdbVotes = @movie['imdbVotes']
      # @imdbId = @movie['imdbId']
      # @type = @movie['Type']
    end
  end
  erb :about
end

get '/history' do

  @newarray = []

  f = File.open("search_history.txt", "r")
  f.each_line do |line|
     @newarray << line
  end
  f.close

  erb :history
end





