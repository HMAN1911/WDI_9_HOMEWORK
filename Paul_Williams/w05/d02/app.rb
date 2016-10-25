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
  @recipes = run_sql "SELECT name, style, abv FROM recipes;"
  erb :index
end
