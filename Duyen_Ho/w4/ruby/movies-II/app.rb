require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :index
end

get '/search_results' do
  @user_input = params[:title]
  @results = HTTParty.get("http://omdbapi.com/?s=#{@user_input}")
  # binding.pry

  if @results['Response'] == 'False'
    redirect to "/error"
  end

  if @results['totalResults'] == '1'
    # binding.pry
    @imdb_id = @results['Search'][0]['imdbID']
    redirect to "/about?movie=#{@imdb_id}"
  end

  erb :search_results
end

get '/error' do
  erb :error
end

get '/about' do
  # get params from anchor tag query string
  @imdb_id = params[:movie]
  @result = HTTParty.get("http://omdbapi.com/?i=#{@imdb_id}")
  # binding.pry
  erb :about
end
