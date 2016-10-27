require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movies',
  # username:
}

ActiveRecord::Base.establish_connection(options)
# ApplicationRecord.establish_connection(options)
