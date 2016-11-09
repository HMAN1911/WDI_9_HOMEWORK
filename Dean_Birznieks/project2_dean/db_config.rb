require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'my_matrix',
}

ActiveRecord::Base.establish_connection(options)
