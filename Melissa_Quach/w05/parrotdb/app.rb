require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

DBNAME = 'parrotdb'

def run_sql(sql)
  db = PG.connect(dbname: DBNAME)
  result = db.exec(sql)
  db.close
  return result
end

# display all submissions
# GET /
get '/' do
  # Fetch gifs from DB
  @gifs = run_sql("
    SELECT *
    FROM posts
  ")

  erb :index
end
