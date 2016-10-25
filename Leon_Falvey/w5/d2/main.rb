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
