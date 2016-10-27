require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movieswebsite'
}

ActiveRecord::Base.establish_connection(options)