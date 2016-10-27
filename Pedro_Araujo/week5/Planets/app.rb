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

get '/new' do
  erb :new_planet
end

get '/planets' do
  run_sql("INSERT INTO planets (name,moons,image_url,description) VALUES ('#{params[:name]}',#{params[:moons]} ,'#{params[:image_url]}','#{params[:description]}')")
  redirect to '/'
end

get '/planet/:id' do
  @planet = run_sql("SELECT * FROM planets WHERE id = #{params[:id]}")[0]
  erb :planet
end

get '/planets/:id/edit' do
  @planet = run_sql("SELECT * FROM planets WHERE id = #{params[:id]}")[0]
  erb :edit_planet
end

post '/planets/:id/edit' do
  run_sql("UPDATE planets SET name = '#{params[:name]}', image_url = '#{params[:image_url]}', moons = #{params[:moons]}, description = '#{params[:description]}' WHERE id = #{params[:id]} ;")
  redirect to "/planet/#{params[:id]}"
end

post '/planets/:id/delete' do
  run_sql("DELETE FROM planets WHERE id = #{params[:id]}")
  redirect to '/'
end
