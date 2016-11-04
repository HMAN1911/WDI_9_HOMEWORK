require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'moviesdb',
  #username: 'daniel'  you dont need this
}

ActiveRecord::Base.establish_connection(options)
