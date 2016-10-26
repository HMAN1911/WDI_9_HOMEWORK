# require 'pry'
# require 'pg'
#
# class Dish
#
#   attr_accessor :name #this basically a shorter way of doing both getting and setting in one
#   #but if you have exceptions you use something else
#   #to use in pry d1.name will return the name
#   #to set do d1.name = 'sadfasdfasdf' - will change the name
#
#   def initialize(name, image_url)
#     @name = name
#     @image_url = image_url
#   end
#
#   #getting - can replace with attr_accessor
#   def name
#     @name
#   end
#
#   #setting - change the name -  can replace with attr_accessor
#   def set_name(new_name)
#     @nmae = new_name
#   end
#
#   #setter     #to call setter - d1.name = 'abc' -  can replace with attr_accessor
#   def name=(name)
#     @name = name
#   end
#
#   def valid_name?
#     @name.length > 3
#   end
#
#   def image_url
#     @image_url
#   end
#
#   def save
#     return false unless valid_name?
#     #use the correct sql statement to add a new dish to the database
#     db = PG.connect(dbname: 'goodfoodhunting')
#     db.exec("INSERT INTO dishes (name, image_url,) VALUES ('#{@name}', '#{@image_url}')")
#     db.close
#   end
#
#   #so when the user submits a new dish form you call two methods -d1 = Dish.new and d1.save
#   #and the advantage of this is putting in length statement etc
#
#   def self.find(id)
#     db = PG.connect(dbname: 'goodfoodhunting')
#     db.exec("SELECT FROM dishes WHERE ID =#{id};)"[0]
#     db.close
#     #this line so you can access it
#     return dish.new(result['name'], result['image_url'])
#   end
#
#   #to use this method Dish.find(2)  - - returns the dish object with that id
#
#
#
# binding.pry
