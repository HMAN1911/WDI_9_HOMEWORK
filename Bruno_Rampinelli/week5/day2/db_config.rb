require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'footballplayers',
}

ActiveRecord::Base.establish_connection(options)
