require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'lineart'
}

ActiveRecord::Base.establish_connection(options)
