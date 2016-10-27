require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'moviesdb'
}

ActiveRecord::Base.establish_connection(options)
