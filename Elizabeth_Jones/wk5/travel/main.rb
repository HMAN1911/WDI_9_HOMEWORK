require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg' #need this to connect to database



#method that stores the common functionality related to the db
#the reason you have to run this in every method is because
#once the server makes a new request it forgets everything else
def run_sql(sql)
  #connect to database
  db = PG.connect(dbname: 'travel')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do  #show all dishes
  @dishes = run_sql("select * from trips;")
  erb :index
end

get '/trips/new' do  #shows the form only
  erb :trips_new
end


post '/trips' do  #creates the dish only
    db = PG.connect(dbname: 'travel')
    db.exec("INSERT INTO trips (name, image_url) VALUES ('#{params[:name]}', '#{params[:image_url  ]}');")  #values is what we get from user input submitted in the form
    db.close
    redirect to '/'
end

# - to view array and hash data - type results into pry

#show single dish -  search for dish with that id
get '/trips/:id' do      # can put /dishes/whateveryouwant and you will see 'hi im a cake'
  #show single dish -  search for dish with that id
  results = run_sql("SELECT * FROM trips WHERE id = #{ params[:id] };")
  binding.pry
  @dish = results[0]
  erb :trips_show
end

#this is just bringing up the edit form when ever you click edit
get '/trips/:id/edit' do
  @dish2 = run_sql("SELECT * FROM trips WHERE id = #{ params[:id] };").first
  erb :trips_edit
end


#this is posting the new update when you click the update button
post '/trips/:id' do
  #sql statment to update an existing dish
  #update dishes set name = '', image_url = '' where id = 7
  run_sql("UPDATE trips SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};")
  redirect to "/trips/#{ params[:id] }"
end

post '/trips/:id/delete' do
  run_sql("DELETE FROM trips WHERE id = #{params[:id]};")
  redirect to '/'
end
