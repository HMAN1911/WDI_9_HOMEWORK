require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movie_list'
}

ActiveRecord::Base.establish_connection(options)
