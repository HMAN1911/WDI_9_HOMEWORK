require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  @query = params[:query]

  if @query != nil
    results = HTTParty.get("http://omdbapi.com/?s=#{@query}")
    if (results["Response"] == "True")
      # If only one result found, redirect to
      # info page
      if results["totalResults"].to_i == 1
        movie_title = results["Search"].first["Title"]
        redirect to "/info?title=#{movie_title}"
      # Else, print result list
      else
        @movies = results["Search"]
        erb :index
      end
    else
      @error = results["Error"]
      erb :error
    end
  else
    erb :index
  end
end

get '/info' do
  @query = params[:title]
  @movie = HTTParty.get("http://omdbapi.com/?t=#{@query}")
  erb :about
end

# binding.pry
