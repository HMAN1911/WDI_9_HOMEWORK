require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

# Search history file
HISTFILE = 'search_history.txt'

def record_search(query)
  File.open(HISTFILE, 'a') do |file|
    file.write("#{Time.new.to_s},#{query}\n")
  end
end

get '/' do
  @query = params[:query]

  if @query != nil
    record_search(@query)

    results = HTTParty.get("http://omdbapi.com/?s=#{@query}")
    if (results["Response"] == "True")
      # If only one result found, redirect to info page
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

get '/history' do
  @history = []
  if File.exists?(HISTFILE)
    File.open(HISTFILE) do |file|
      file.readlines.each do |line|
        line = line.chomp.split(',')

        @history.push({
          "time" => line[0],
          "query" => line[1]
        })
      end
    end
  end

  erb :history
end

# binding.pry
