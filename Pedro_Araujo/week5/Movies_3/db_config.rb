require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'barcodemovies'
  #username: 'x'
}

ActiveRecord::Base.establish_connection(options)
