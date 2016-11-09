# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Can use seeds.rb

# u = User.new
# u.email = 'dt2@ga.co'
# u.password = 'pudding'
# u.save

Dish.destroy_all
# User.destroy_all

u = User.first
# u = User.new
# u.email - 'dt2@ga.co'
# u.password = 'pudding'
# u.save


food = ['cake','pudding','candy','muffin']

# 15.times do |num|
#   Dish.create(title: "#{food.sample} #{food.sample}", image_url: "https://idiotprufs.files.wordpress.com/2016/03/pudding.jpg", user_id: u.id)
# end

15.times do |num|
  Dish.create(title: "dish #{num}", image_url: "https://idiotprufs.files.wordpress.com/2016/03/pudding.jpg", user_id: u.id)
end
