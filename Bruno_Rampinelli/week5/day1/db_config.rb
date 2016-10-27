require 'active_record'

options= {
  adpter: 'postgresql'
  database: 'movieshunting'
}

ActiveRecord::Base.establish_connection(options)
