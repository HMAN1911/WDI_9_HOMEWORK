require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  p params
  if params.length > 0
    if params[:search]
      search = "http://omdbapi.com/?s=#{params[:search]}"
      @result = HTTParty.get(search)
      p @result
      if @result["totalResults"] == "1"
        imdbID = @result["Search"][0]["imdbID"]
        search = "http://omdbapi.com/?i=#{imdbID}"
        @result = HTTParty.get(search)
      end
    end
    if params[:title]
      imdbID = params[:title]
      search = "http://omdbapi.com/?i=#{imdbID}"
      @result = HTTParty.get(search)
    end
    p @result
  else
    @result = nil
  end
  erb :index
end

get '/about' do
  erb :about
end
