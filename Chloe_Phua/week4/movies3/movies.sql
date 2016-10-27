CREATE DATABASE movies;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(50),
  year VARCHAR(10),
  plot TEXT,
  director VARCHAR(50),
  actors TEXT,
  rating VARCHAR(10)
);

post '/dishes' do
  @movies = Movies.new
  @movies.name = params[:name]
  @dishes.image_url = params[:image_url]
  @dishes.dish_type_id = params[:dish_type_id]

  if @dishes.save
    redirect to '/'
  else erb :dishes
  end
