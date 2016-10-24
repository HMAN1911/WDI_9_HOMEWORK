require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'PG'

get '/' do
  @placeholder = "<Enter Movie>"
  erb :index
end

get '/search' do
  find_input = params["find-movie"]
  db = PG.connect(dbname: 'movies')
  db.exec("INSERT INTO searchhistory (search) VALUES ('#{find_input}')")
  db.close
  @placeholder = find_input
  safeURI = URI.escape("http://omdbapi.com/?s=#{find_input}")
  @search_results = HTTParty.get(safeURI)["Search"]
  redirect to "/" if @search_results.nil?
  if @search_results.length == 1
    safeURI = URI.escape("/#{@search_results[0]['Title']}#{@search_results[0]['Year']}")
    redirect to "/movie/#{safeURI}"
  end
  erb :results
end

get '/movie/:title' do
  movie_search = params[:title]
  movie_title = movie_search[0..movie_search.length-5]
  movie_year =  movie_search[movie_search.length-4..-1]
  @placeholder = movie_title
  safeURI = URI.escape("http://omdbapi.com/?t=#{movie_title}&y=#{movie_year}")
  @result = HTTParty.get(safeURI)
  if @result["Response"] == "False"
    redirect to "/"
  else
    posterUrl = @result.delete("Poster")
    posterUrl == "N/A" ? @posterSrc = "" : @posterSrc = posterUrl
  end
  erb :movie
end

get '/history' do
  db = PG.connect(dbname: 'movies')
  @search_history = db.exec('SELECT * FROM searchhistory')
  erb :history
end
