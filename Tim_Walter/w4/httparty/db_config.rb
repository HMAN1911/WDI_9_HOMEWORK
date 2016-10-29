require 'active_record'
# PG required behind the scenes



options = {
  adapter: 'postgresql',
  database: 'movie_finder'
}

ActiveRecord::Base.establish_connection(options)




# now we can use the methods we created in the class example before this
# .name
# .save
# .count
# .all
# .all.to_sql
