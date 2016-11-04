require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'



get '/' do
  # show all cars

  # connect to db
  db = PG.connect(dbname: 'favcars')
  # exec a select query
  @result = db.exec("select * from cars;")
  db.close
  erb :index
end

get '/cars/new' do
  # show the form only
  erb :cars_new
end

post '/cars' do
  # create the dish
  db = PG.connect(dbname: 'favcars')
  db.exec("INSERT INTO cars (name, img_url) VALUES ('#{ params['name'] }', '#{ params['img_url'] }')")
  db.close
  redirect to '/'
end

get '/cars/:id' do
  # show single dish
    db = PG.connect(dbname: 'favcars')
    results = db.exec("select * from cars where id = #{ params[:id] };")
  #search for dish with that id
  @car = results[0]
  db.close
  erb :cars_show
end

  # update and edit
get '/cars/:id/edit' do
  db = PG.connect(dbname: 'favcars')
  @car = db.exec("select * from cars where id = #{ params[:id] };")[0]
  db.close
  erb :cars_edit
  # sgl statement to update an existing dish.

end

post '/cars/:id' do
  db = PG.connect(dbname: 'favcars')
  db.exec("UPDATE cars SET name ='#{ params['name'] }', img_url ='#{ params['img_url'] }' WHERE ID =#{ params[:id]};")
  db.close
  redirect to '/'
end

# Delete then redirect to index
get '/cars/:id/delete' do
  db = PG.connect(dbname: 'favcars')
  @car = db.exec("select * from cars where id = #{ params[:id] };")[0]
  db.close
  erb :cars_delete
end

delete '/cars/:id' do
  db = PG.connect(dbname: 'favcars')
  db.exec("DELETE FROM cars WHERE ID =#{ params[:id] };")
  db.close
  redirect to '/'
end
