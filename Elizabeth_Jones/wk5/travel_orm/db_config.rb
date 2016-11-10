require 'active_record'
#supports other sqls

#tell active records what database to talk to
options = {
  adapter: 'postgresql',
  database: 'travel'
}

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'travel'
})

# PG.connect({
#  dbname: 'sdfsdf'
# })
