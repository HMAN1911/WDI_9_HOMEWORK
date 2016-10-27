require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :index
end

get '/about' do

  if params.length != 0
    # takes dropdown selection type and generates search parameter string
    filter_string = ''
    filter = case params[:search]
    when 'title' then filter_string = 't'
    when 'imdb_num' then filter_string = 'i'
    # when 'poster' then filter_string = 't'
    # write condition to print title and poster only
    end

    @user_input = params[:title]
    # gets the results hash
    @result = HTTParty.get('http://omdbapi.com/?' + filter_string + '=' + @user_input)

    @poster = '<img src="' + @result['Poster'] + '">'
    @title = '<span>Title: </span>' + @result['Title']
    @year = '<span>Year: </span>' + @result['Year']
    @director = '<span>Director: </span>' + @result['Director']
    @actors = '<span>Actors: </span>' + @result['Actors']
    @plot = '<span>Plot: </span>' + @result['Plot']
  end


  erb :about
end


# Next time:
# Movie poster only option
# Reset button
# Incorporate API 204 response - movie not found

# Also look at partials:
# https://middlemanapp.com/basics/partials/


# Movies I

# Specification

# Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page.

# Build a Sinatra application
# Include:
# app.rb
# views/layout.erb
# views/index.erb
# views/about.erb
# public/css/style.css
# example httparty usage
