require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg' # to connect to database

def run_sql(sql)
  db = PG.connect(dbname: 'crates')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do
  @crates = run_sql("select * from records;")
  erb :index
end

get '/crates/new' do
  # show the form
  erb :crates_new
end

post '/crates' do
  # create the record
  run_sql("INSERT INTO records (title, artist, image_url) VALUES ('#{params[:title]}', '#{params[:artist]}','#{params[:image_url]}');")

  redirect to '/'
end

get '/crates/:id' do # customise url to pass info
  # show single record

  @record = run_sql("select * FROM records WHERE id = #{params[:id]};")[0]
  # search for record with that id
  erb :crates_show
end

#show the edit record form
get '/crates/:id/edit' do
    @record = run_sql("select * FROM records WHERE id = #{params[:id]};")[0]
    erb :crates_edit
end


#updating an existing record
post '/crates/:id' do
  run_sql("UPDATE records SET title = '#{ params[:title] }', artist='#{ params[:artist] }', image_url='#{ params[:image_url] }' where id = '#{ params[:id] }'")
  redirect to "/crates/#{params[:id]}"
end


post '/crates/:id/delete' do
  run_sql("DELETE FROM records WHERE id = #{ params[:id] };")
  redirect to '/'
end
