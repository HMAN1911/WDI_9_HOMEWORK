require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'PG'

def run_sql(sql)
  db = PG.connect(dbname: 'movies')
  results = db.exec(sql)
  db.close
  results
end

get '/' do
  @placeholder = "<Find New Movie>"
  redirect to '/my-movies'
end

get '/search' do
  find_input = params["find-movie"]
  run_sql("INSERT INTO searchhistory (search) VALUES ('#{find_input}')")
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
    posterUrl == "N/A" ? @posterSrc = "https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97450&w=300&h=450" : @posterSrc = posterUrl
  end
  erb :movie
end

get '/history' do
  @placeholder = "<Find New Movie>"
  @search_history = run_sql('SELECT * FROM searchhistory ORDER BY id DESC')
  erb :history
end

get '/my-movies' do
  @placeholder = "<Find New Movie>"
  @movies = run_sql("SELECT * FROM my_movies ORDER BY id;")
  erb :my_movies
end

get '/add-movie/:title' do
  @placeholder = "<Find New Movie>"
  movie_search = params[:title]
  movie_title = movie_search[0..movie_search.length-5]
  movie_year =  movie_search[movie_search.length-4..-1]
  safeURI = URI.escape("http://omdbapi.com/?t=#{movie_title}&y=#{movie_year}")
  @result = HTTParty.get(safeURI)
  posterUrl = @result["Poster"]
  posterUrl == "N/A" ? @posterSrc = "https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97450&w=300&h=450" : @posterSrc = posterUrl
  erb :add_movie
end

post '/add-movie' do
  params['image-url'] == 'N/A' ? image_url = 'https://placeholdit.imgix.net/~text?txtsize=19&txt=200%C3%97300&w=200&h=300' : image_url = params['image-url']
  run_sql("INSERT INTO my_movies (title, year, review, stars, image_url) VALUES ('#{params['title']}', '#{params['year']}', '#{params['review']}', '#{params['stars']}', '#{image_url}');")
  redirect to '/'
end

get '/edit-movie/:id' do
  @placeholder = "<Find New Movie>"
  @result = run_sql("SELECT * FROM my_movies WHERE id = #{params['id'].to_i};").first
  erb :edit_movie
end

post '/edit-movie/:id' do
  run_sql("UPDATE my_movies SET stars = '#{params['stars']}', review = '#{params['review']}' WHERE id = #{params['id']};")
  redirect to '/'
end

post '/delete-movie/:id' do
  run_sql("DELETE FROM my_movies WHERE id = #{params['id']}")
  redirect '/'
end
