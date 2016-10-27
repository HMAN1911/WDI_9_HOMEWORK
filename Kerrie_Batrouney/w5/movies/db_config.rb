require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'localmovies'
}


ActiveRecord::Base.establish_connection(options)
# ApplicationRecord.establish_connection(options)
