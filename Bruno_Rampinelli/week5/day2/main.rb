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

get '/players/new' do

  erb :players_new
end

post '/players' do

  @players  = run_sql("INSERT INTO players (name, image_url, position, nationality) VALUES ( '#{params[:name]}', '#{params[:image_url]}', '#{params[:position]}' , '#{params[:nationality]}');")
  redirect '/'
end
