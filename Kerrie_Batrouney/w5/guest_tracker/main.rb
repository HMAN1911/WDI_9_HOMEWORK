require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

def run_sql (sql)
  db = PG.connect(dbname: 'guest_tracker')
  results = db.exec(sql)

  db.close
  return results
end

get '/' do
  @guests = run_sql("select * from guests;")
  erb :index
end

get '/guests/new' do
  # show the form only
  erb :new_guest
end

post '/guests' do
  # create the record
  run_sql("INSERT INTO guests (name, phone) VALUES ('#{params[:name]}', '#{params[:phone]}');")
  redirect to '/'
end

get '/guests/:id' do
  # show single guest
  results = run_sql("SELECT * FROM guests WHERE (id=#{params[:id]});")
  @guest = results[0]
  erb :guests_display
end

# show the edit dish form
get '/guests/:id/edit' do
  # [0] is needed because the function returns an array, can use .first instead
@guest = run_sql("SELECT * FROM guests WHERE id = #{params[:id]};")[0]
  erb :guest_edit
end

# updating an existing guest
post '/guests/:id' do
  # sql statement
  # params.inspect
  # return params[:name], params[:phone]
  run_sql("UPDATE guests SET (name = '#{params[:name]}', phone = '#{params[:phone]}', rating = #{params[:rating]}, group_size = #{params[:group_size]}, cleanliness = #{params[:cleanliness]}, review_by_me = #{params[:review_by_me]}, review_of_house = #{params[:review_of_house]} WHERE id = #{params[:id]}); ")
  redirect to "/guests/#{params[:id]}"
end

# delete an existing guest
post '/guests/:id/delete' do
  # use to test that the code takes you to the right place with the right id
  # return 'afhwjfpo  wkgf'
  # return params[:id].to_s
  run_sql("DELETE FROM guests WHERE id = #{params[:id]};")
  redirect to '/'
end
