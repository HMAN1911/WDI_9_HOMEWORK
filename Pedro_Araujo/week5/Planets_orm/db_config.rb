require 'pg'

options = {
  adapter: 'postgresql',
  database: 'planetsintheworld'
}

ActiveRecord::Base.establish_connection(options)
