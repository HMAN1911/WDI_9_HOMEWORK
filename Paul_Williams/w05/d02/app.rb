require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

def run_sql sql
  db = PG.connect dbname: "homebrew"
  result = db.exec sql
  db.close
  result
end

get '/' do
  @recipes = run_sql "SELECT name, style, abv, id FROM recipes;"
  erb :index
end

get '/recipe/:id' do
  @recipe = run_sql("SELECT * FROM recipes WHERE id = #{ params[:id] };")[0]
  erb :recipe_details
end

get '/new' do
  erb :new_recipe
end

post '/new' do
  run_sql "INSERT INTO recipes (
    name,
    style,
    grain_bill,
    mash_temp,
    mash_time,
    hop_additions,
    ferment_temp,
    osg,
    fsg,
    abv,
    comments
  ) 
  VALUES (
    '#{params[:name]}',
    '#{params[:style]}',
    '#{params[:grain_bill]}',
    #{params[:mash_temp]},
    #{params[:mash_time]},
    '#{params[:hop_additions]}',
    #{params[:ferment_temp]},
    #{params[:osg]},
    #{params[:fsg]},
    '#{params[:abv]}',
    '#{params[:comments]}'
  );"
  redirect to "/"
end

get "/edit/:id" do
  @recipe = run_sql("SELECT * FROM recipes WHERE id = #{ params[:id] };")[0]
  erb :edit_recipe
end

patch '/edit/:id' do
  run_sql "UPDATE recipes SET
    name = '#{params[:name]}',
    style = '#{params[:style]}',
    grain_bill = '#{params[:grain_bill]}',
    mash_temp = #{params[:mash_temp]},
    mash_time = #{params[:mash_time]},
    hop_additions = '#{params[:hop_additions]}',
    ferment_temp = #{params[:ferment_temp]},
    osg = #{params[:osg]},
    fsg = #{params[:fsg]},
    abv = '#{params[:abv]}',
    comments = '#{params[:comments]}'
  WHERE id = #{ params[:id] };"
  redirect to "/recipe/#{ params[:id] }"
end

delete '/delete/:id' do
  run_sql "DELETE FROM recipes WHERE id = '#{ params[:id] }';"
  redirect to "/"
end
