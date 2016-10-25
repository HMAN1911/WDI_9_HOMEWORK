require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

def run_sql sql
  db = PG.connect dbname: "homebrew"
  result = db.exec sql
  db.close
  result
end

get '/' do
  @recipes = run_sql "SELECT name, style, abv, id FROM recipes;"
  erb :index
end

get '/recipe/:id' do
  @recipe = run_sql("SELECT * FROM recipes WHERE id = #{ params[:id] };")[0]
  erb :recipe_details
end

get '/new' do
  erb :new_recipe
end
