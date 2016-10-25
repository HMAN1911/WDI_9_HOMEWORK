require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: "planetsintheworld")
  results = db.exec(sql)
  db.close
  return results
end


get '/' do
  @planets = run_sql("SELECT * FROM planets;")
  erb :index
end

get '/planets' do
  run_sql("INSERT INTO planets (name,moons,image_url,description) VALUES ('#{params[:name]}',#{params[:moons]} ,'#{params[:image_url]}','#{params[:description]}')")
  erb :planets
end

get '/planet/:id' do
  @planet = run_sql("SELECT * FROM planets WHERE id = #{params[:id]}")[0]
  erb :planet
end

get '/new' do

  erb :new_planet
end

post '/planets/:id/delete' do
  run_sql("DELETE FROM planets WHERE id = #{params[:id]}")
  redirect to '/'
end
