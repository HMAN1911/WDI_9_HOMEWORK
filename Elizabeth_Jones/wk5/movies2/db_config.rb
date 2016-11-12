require 'active_record'
#supports other sqls

#tell active records what database to talk to
options = {
  adapter: 'postgresql',
  database: 'movie_finder'
}

ActiveRecord::Base.establish_connection(options)
