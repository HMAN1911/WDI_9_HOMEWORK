require 'active_record'

options= {
  adapter: 'postgresql',
  database: 'movieshunting',
}

ActiveRecord::Base.establish_connection( ENV['DATABASE_URL'] || options)
