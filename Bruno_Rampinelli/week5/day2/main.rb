require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

#create a function to make the code DRY

def run_sql(sql)
  db = PG.connect(dbname: 'footballplayers')
  result = db.exec(sql)
  db.close
  return result
end

#show all players

get '/' do
  @players = run_sql("SELECT * from players;")
  erb :index
end
