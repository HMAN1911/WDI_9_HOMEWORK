require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'real_art')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do
  @arts = run_sql("select * from artz")
  erb :index
end

get '/arts/new' do
  erb :new_art
end

post '/arts' do
  @share = run_sql("insert into artz (name, artist, image_url) values ('#{params[:name]}', '#{params[:artist]}', '#{params[:imageurl]}');")
  redirect to '/'
end

get '/arts/:id' do
  @art = run_sql("select * from artz where id = #{}")

  erb :arts_show
end
