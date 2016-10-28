
require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'moviesearchbackup',
}

ActiveRecord::Base.establish_connection(options)
