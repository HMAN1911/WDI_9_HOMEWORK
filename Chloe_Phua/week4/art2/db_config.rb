require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'real_art'
}

ActiveRecord::Base.establish_connection(options)
