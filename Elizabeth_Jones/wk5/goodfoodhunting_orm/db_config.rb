require 'active_record'
#supports other sqls

#tell active records what database to talk to
options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting'
}

ActiveRecord::Base.establish_connection(options)
