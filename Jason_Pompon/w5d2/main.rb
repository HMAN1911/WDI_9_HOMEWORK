require 'sinatra'
require 'sinatra/reloader'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'galaxyspotting')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do
  @galaxies = run_sql("SELECT * FROM galaxies;")
  erb :index
end

get '/galaxies/new' do
  erb :galaxies_new
end

post '/galaxies' do

  run_sql("INSERT INTO galaxies (name, image_url, description) VALUES ('#{params[:name]}', '#{params[:image_url]}', '#{params[:description]}');")

  redirect '/'
end

get '/galaxies/:id' do

  results = run_sql("SELECT * FROM galaxies WHERE id=#{params[:id]};")

  @galaxy = results[0]

  erb :galaxies_show
end

# to show edit form
post '/galaxies/:id/edit' do

  @galaxies = run_sql("SELECT * FROM galaxies WHERE id=#{params[:id]};")[0]
  erb :galaxies_edit
end
