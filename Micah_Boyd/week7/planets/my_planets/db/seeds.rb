# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Planet.destroy_all

planet = ['R', '56', 'Neptus', 'GL', 'KMP', '120', 'Kato', 'Red', 'West', 'Nebulus', '178']

20.times do
  Planet.create(title: "#{planet.sample}-#{planet.sample}",
  image_url: 'http://www.nasa.gov/sites/default/files/images/729223main_728322main_messenger_orbit_image20130218_2_full_full_full.jpg')
end
