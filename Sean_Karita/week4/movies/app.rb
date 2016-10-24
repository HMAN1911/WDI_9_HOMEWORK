require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  if params.length != 0
    # if params[:movies].length != 0
      @movie_name = params[:movie]
      @result = HTTParty.get('http://omdbapi.com/?t=' + @movie_name);
      @title = @result['Title']
      @year = @result['Year']
      @rated = @result['Rated']
      @poster = @result['Poster']
    # end
  end
  erb :index
end

# get 'index' do
#   erb :index
# end
