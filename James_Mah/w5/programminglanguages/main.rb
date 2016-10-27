require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'programminglanguages')
  results = db.exec(sql)
  db.close
  return results
end
  
get '/' do
  @programminglanguages = run_sql("SELECT * FROM programminglanguages ORDER BY name asc;")
  erb :index
end

get '/new' do
  erb :new
end

post '/' do
  run_sql("INSERT INTO programminglanguages (name, icon_url, description) VALUES ('#{params[:name]}', '#{params[:icon_url]}', '#{params[:description]}');")
  redirect to '/'
end

get '/:name' do
  @programminglanguage = run_sql("SELECT * FROM programminglanguages WHERE name='#{params[:name]}';").first
  erb :display
end

# show the edit dish form
get '/:name/edit' do
  @programminglanguage = run_sql("SELECT * FROM programminglanguages WHERE name = '#{params[:name]}';").first
  erb :edit
end

# updating an existing dish
put '/:name' do
  run_sql("UPDATE programminglanguages SET name='#{params[:name]}', icon_url='#{params[:icon_url]}', description='#{params[:description]}' WHERE name='#{params[:name]}';")
  redirect to "/#{params[:name]}"
end

delete '/:id' do
  run_sql("DELETE FROM programminglanguages WHERE name='#{params[:name]}';")
  redirect to '/'
end



