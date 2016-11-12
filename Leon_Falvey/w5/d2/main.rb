require 'sinatra'
require 'sinatra/reloader'
require 'pg'

def run_sql(sql)
  db = PG.connect(dbname: 'rpgcharacters')
  @result = db.exec(sql)
  db.close
  return @result
end

get '/' do
  @all_char = run_sql("select * from characters")

  erb :char_index
end

get '/char/create' do
  erb :char_create
end

post '/char/create' do

  run_sql("insert into characters (name, race, class, fav_hat) values ( '#{params[:name]}', '#{params[:race]}', '#{params[:class]}', '#{params[:fav_hat]}' );")

  redirect to '/'
end

get '/char/:id' do

  @char =run_sql("select * from characters where id=#{params[:id]}")[0]

  erb :char
end

get '/char/edit/:id' do
  @char =run_sql("select * from characters where id=#{params[:id]}")[0]

  erb :char_edit
end

post '/char/edit/:id' do
  run_sql("update characters set name='#{params[:name]}',race='#{params[:race]}',class='#{params[:class]}',fav_hat='#{params[:fav_hat]}' where id=#{params[:id]}")

  redirect to "/char/#{params[:id]}"
end

#homeworkd pass _method
post '/char/delete/:id' do
  erb :char_kill

end

delete '/char/delete/:id' do
  run_sql("delete from characters where id=#{params[:id]}")

  redirect to "/"
end
