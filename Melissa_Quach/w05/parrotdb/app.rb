require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

DBNAME = 'parrotdb'

def run_sql(sql)
  db = PG.connect(dbname: DBNAME)
  result = db.exec(sql)
  db.close
  return result
end

# display all submissions
# GET /
get '/' do
  # Fetch posts from DB
  @posts = run_sql("
    SELECT *
    FROM posts
    ORDER BY id
  ")

  erb :index
end

# display submission form
# GET /gifs/new
get '/posts/new' do
  erb :post_new
end

# create new post
post '/posts' do
  run_sql("
    INSERT INTO posts (image_url, caption)
    VALUES ('#{params[:image_url]}', '#{params[:caption]}')
  ")
  redirect to '/'
end

# display post
get '/posts/:id' do
  @post = run_sql("
    SELECT *
    FROM posts
    WHERE id = #{params[:id]}
  ").first
  erb :post_show
end

# display edit form
get '/posts/:id/edit' do
  @post = run_sql("
    SELECT *
    FROM posts
    WHERE id = #{params[:id]}
  ").first
  erb :post_edit
end

# save changes to post
put '/posts/:id' do
  run_sql("
    UPDATE posts
    SET image_url = '#{params[:image_url]}',
      caption = '#{params[:caption]}'
    WHERE id = #{params[:id]}
  ")
  redirect to "/posts/#{params[:id]}"
end

# delete post
delete '/posts/:id' do
  run_sql("
    DELETE FROM posts
    WHERE id = #{params[:id]}
  ")
  redirect to '/'
end
