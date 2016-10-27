require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'


def run_sql(sql)
  db = PG.connect(dbname: 'treelibrary')
  results = db.exec(sql)
  db.close
  return results
end


get '/' do
  @trees = run_sql("SELECT * FROM trees;")
  erb :index
end
#
get '/trees/:id' do
  @trees_result = run_sql("SELECT * FROM trees WHERE id = #{ params[:id] }")
  @tree = @trees_result.first

  erb :trees_show
end

get '/trees/add' do
  erb :trees_add
end

post '/trees' do
  @insert_tree = run_sql("INSERT INTO trees (name, image_url)
  VALUES ('#{params[:name]}', '#{params[:image_url]}');")

  redirect to '/'
end

post '/trees/:id/delete' do

  @tree = run_sql("DELETE FROM trees WHERE id = #{ params[:id]}").first

  redirect to '/'
end

post '/dishes/:id/edit' do

  @tree = run_sql("DELETE FROM trees WHERE id = #{ params[:id]}").first

  redirect to '/'

end
