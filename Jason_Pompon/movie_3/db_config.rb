require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movie3'
}

ActiveRecord::Base.establish_connection(options)
