require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'worldmountains')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do
  @mountains = run_sql("SELECT * FROM mountains ORDER BY id;")
  erb :index
end

get '/mountains/new' do
  erb :mountain_new
end

post '/mountains' do
  run_sql("INSERT INTO mountains (name, image_url) VALUES ('#{ params[:name] }',' #{ params[:image_url] }');")
  redirect to '/'
end

get '/mountains/:id' do
  @mountain = run_sql("SELECT * FROM mountains WHERE id = #{ params[:id] };")[0]
  erb :mountain_show
end

put '/mountains/:id' do
  run_sql("UPDATE mountains SET name = '#{ params[:name] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id] };")
  redirect to "/mountains/#{ params[:id] }"
end

get '/mountains/:id/edit' do
  @mountain = run_sql("SELECT * FROM mountains WHERE id = #{ params[:id] };")[0]
  erb :mountain_edit
end

delete '/mountains/:id' do
  run_sql("DELETE FROM mountains WHERE id = '#{ params[:id] }';")
  redirect to '/'
end
