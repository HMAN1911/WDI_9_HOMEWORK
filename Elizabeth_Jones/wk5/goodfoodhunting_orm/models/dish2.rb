#telling it i have a table called dishes
#matches Dish with the 'dishes' table
class Dish < ActiveRecord::Base
end


# methods you can call

# d1 = Dish.new_name
#
# d1.name = 'eggs'
# d1.save
#
# Dish.all.to_sql
#dish.where(name: 'blah')
# returns dish info with blach name

#http://guides.rubyonrails.org/active_record_basics.html
