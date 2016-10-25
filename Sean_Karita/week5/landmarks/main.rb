require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'goodsightseeing')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do

  @landmarks = run_sql("select * from landmarks;")
  erb :index
end

get '/landmarks/new' do
  # show the form only
  erb :landmarks_new
end

post '/landmarks' do
  # create the landmark
  @landmarks = run_sql("INSERT INTO landmarks (name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');")
  redirect to '/'
end

get '/landmarks/:id' do

  result = run_sql("SELECT * FROM landmarks WHERE id = #{params[:id]}")
  @landmark = result[0]
  erb :landmarks_show
end

# show the edit landmark form
get '/landmarks/:id/edit' do
  @landmark = run_sql("select * from landmarks where id = #{ params[:id] }").first
  erb :landmarks_edit
end

# updating an exisitng landmark
post '/landmarks/:id' do
  # update landmarks set name = 'new name', image_url = '' where id = 7;
  run_sql("UPDATE landmarks SET name = '#{ params[:name] }', image_url = '#{ params[:image_url]})' WHERE id = #{ params[:id] };")
  redirect to "/landmarks/#{ params[:id] }"
end

post '/landmarks/:id/delete' do
  run_sql("DELETE FROM landmarks WHERE id = #{ params[:id] };")
  redirect to '/'
end
