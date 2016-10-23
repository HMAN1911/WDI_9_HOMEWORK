require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'
require_relative 'shelter.rb'

# Phase 1
a1 = Animal.new('Mickey', 12, 'male', 'mouse')
a2 = Animal.new('Bugs Bunny', 14, 'male', 'rabbit')
a3 = Animal.new('Babe', 2, 'female', 'pig')
a4 = Animal.new('Donald', 10, 'male' 'duck')

c1 = Client.new('Johnny', 2, 50)
c2 = Client.new('Nicole', 3, 45)

# Phase 2
def add_animal(shelter)
  puts 'Enter name of animal'
  name = gets.chomp
  puts 'Age in months'
  age = gets.chomp
  puts 'male or female'
  gender = gets.chomp
  puts 'Enter species name'
  species = gets.chomp

  # Add animal to the shelter
  animal_added = Animal.new(name, age, gender, species)
  shelter.add_animal(animal_added)

  puts "#{name} added to the shelter"
end

def add_client(shelter)
  puts 'Enter name of client'
  name = gets.chomp
  puts 'Enter number of children'
  children = gets.chomp.to_i
  puts 'Enter your age'
  age = gets.chomp.to_i

  # Add to client list for the shelter
  client_added = Client.new(name, children, age)
  shelter.add_client(client_added)

  puts "#{name} added to the client list"
end


# Phase 3
puts 'Enter name of animal'
animal_name = gets.chomp

puts 'Age in months'
animal_age = gets.chomp

puts 'male or female?'
animal_gender = gets.chomp

puts 'Enter species name'
animal_species = gets.chomp

animal1 = Animal.new(animal_name, animal_age, animal_gender, animal_species)
p animal1

loop do
  puts 'Enter toy name, or "n" if there are no more toys to enter'
  toy_name = gets.chomp
  break if toy_name == 'n'
  toys[toy_name] = [toys]
end

puts 'Enter your name'
client_name = gets.chomp

puts 'Enter number of children'
children_number = gets.chomp

puts 'enter your age'
client_age = gets.chomp

# puts 'Enter pet name or "n" if no more pets to enter'
# pet_names = gets.chomp

client1 = Client.new(client_name, children_number, client_age)
p client1

# Phase 4
def all_animals(shelter)
  animals = shelter.animals
  animals.each do |animal|
    puts "Animal name: #{animal.name}"
    puts "Animal Age: #{animal.age}"
    puts "Animal Gender: #{animal.gender}"
    puts "Species: #{animal.species}"



binding.pry
