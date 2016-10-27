require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'search_film'
}

ActiveRecord::Base.establish_connection(options)
