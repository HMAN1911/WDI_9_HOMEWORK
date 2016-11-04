require 'active_record'


options = {
  adapter: 'postgresql',
  database: 'memetube'

}

ActiveRecord::Base.establish_connection(options)
