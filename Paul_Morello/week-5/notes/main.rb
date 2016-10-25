require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_sql sql
  db = PG.connect(dbname: 'notes')
  results = db.exec(sql)
  db.close
  return results
end

get '/' do

  @notes = run_sql "select * from note ORDER BY id DESC;"

  erb :index
end

get '/notes/new' do
  erb :notes_new
end

post '/notes' do

  @notes = run_sql "INSERT INTO note (name, date, details) VALUES ('#{params['name']}', '#{params['date']}', '#{params['details']}');"

  redirect to '/'
end

get '/notes/:id' do

  results = run_sql "select * from note where id = #{params[:id]};"

  @note = results[0]

  erb :notes_show
end

# show the edit note
get '/notes/:id/edit' do

  @note = run_sql("select * from note where id = #{params[:id]};")[0]

  erb :notes_edit
end

# updating an existing note
post '/notes/:id' do

  run_sql "update note set name = '#{ params['name'] }', date = '#{ params['date'] }', details = '#{params['details']}' where id = #{ params[:id] }"

  redirect to "/notes/#{params[:id]}"

end

# delete a note
post '/notes/:id/delete' do

  run_sql "delete from note where id = #{ params['id']};"

  redirect to '/'

end
