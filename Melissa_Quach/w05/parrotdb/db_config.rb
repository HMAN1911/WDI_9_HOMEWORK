require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'parrotdb'
}

ActiveRecord::Base.establish_connection(options)
