require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'storycharacters',
  # username:
}

ActiveRecord::Base.establish_connection(options)
# ApplicationRecord.establish_connection(options)
