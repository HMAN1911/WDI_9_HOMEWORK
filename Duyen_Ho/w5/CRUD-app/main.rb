require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'


def run_sql(sql)
  db = PG.connect(dbname: 'lineart')
  results = db.exec(sql)
  db.close
  return results
end

# Create
# Read
# Update
# Delete

# home - show all artworks
get '/' do
  @artworks = run_sql("SELECT * FROM artworks;")
  erb :index
end

# C: form to upload new artwork
get '/artworks/new' do
  erb :artworks_new
end

# C: to post new artwork
post '/artworks' do
  @artworks = run_sql("INSERT INTO artworks (title, artist, image_url) VALUES ('#{params[:title]}', '#{params[:artist]}', '#{params[:image_url]}');")
  # redirect after posting
  redirect to '/'
  erb :artworks
end

# R: to show artwork on own page
get '/artworks/:id' do
  results = run_sql("SELECT * FROM artworks WHERE id = #{ params[:id] };")
  # search for artwork with that id (only one entry in array)
  @artwork = results[0]
  erb :artworks_show
end

# U: to show the edit form
get '/artworks/:id/edit' do
  @artwork = run_sql("SELECT * FROM artworks WHERE id = #{ params[:id] };")[0]
  erb :artworks_edit
end

# U: to update edits
post '/artworks/:id' do
  run_sql("UPDATE artworks SET title = '#{ params[:title] }', artist = '#{ params[:artist] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id] };")
  # dangerous operation so do:
  redirect to "/artworks/#{ params[:id] }"

end

# D: to delete the artwork
delete '/artworks/:id/delete' do
  run_sql("DELETE FROM artworks WHERE id = #{ params[:id] };")
  redirect to '/'
end
