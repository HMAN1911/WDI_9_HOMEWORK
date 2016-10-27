require 'active_record'

# Database configuration
options = {
  adapter: 'postgresql',
  database: 'omdb'
}

# Connect to database
ActiveRecord::Base.establish_connection(options)
