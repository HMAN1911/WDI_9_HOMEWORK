require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'storycharacters')
  resuls = db.exec(sql)
  db.close
  return resuls
end

get '/' do
  @characters = run_sql("SELECT * FROM characters;")
  erb :index
end

# Get new character page
get '/characters/new' do
  erb :new_character
end

# Save character
post '/characters' do
  run_sql("INSERT INTO characters (name, gender, age) VALUES ('#{params[:name]}', '#{params[:gender]}', #{params[:age]});")
  redirect to '/'
end

# Show character details
get '/characters/:id' do
  results = run_sql("SELECT * FROM characters WHERE id=#{params[:id]};")
  @character = results[0]
  erb :show_character
end

# Edit character form
get '/characters/:id/edit' do
  @character = run_sql("SELECT * FROM characters WHERE id=#{params[:id]};")[0]
  erb :edit_character
end

# Update existing character
post '/characters/:id' do
  run_sql("UPDATE characters SET name='#{params['name']}', gender='#{params[:gender]}',
  age= #{params[:age]} WHERE id=#{params[:id]};")
  redirect to "/characters/#{params[:id]}"
end

# Kill chracter
post '/characters/:id/delete' do
  run_sql("DELETE FROM characters WHERE id=#{params[:id]};")
  redirect to '/'
end
