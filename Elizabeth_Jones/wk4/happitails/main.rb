require 'pry'
require_relative 'animal'
require_relative 'client'

animal1 = Animal.new('john', 5, 'male', 'chihuahua', 2)
animal2 = Animal.new('sally', 1, 'female', 'cat', 1) ##created a new object called animal1
client2 = Client.new('sam', 29, 1, 2) #created new client object


$shelter = {
  :animals => [animal1, animal2], #list of animals created
  :clients => [client2] # list of clients created #could be another hash
}


def get_info
  loop do
  puts "Press 1 to create new client record\nPress 2 to create new animal record\nPress 3 to see current animals\nPress 4 to see current clients"
  response = gets.chomp
  if response == '1'
    puts "Enter client name: "
    client_name = gets.chomp
    puts "Enter client age: "
    client_age = gets.chomp
    puts "Enter number of children: "
    children = gets.chomp
    puts "Enter number of pets: "
    pets = gets.chomp
    new_client = Client.new(client_name, client_age, children, pets)
    $shelter[:clients].push(new_client)#push the client object into the list of clients
  elsif response == '2'
    puts "Enter animal name: "
    animal_name = gets.chomp
    puts "Enter animal age: "
    animal_age = gets.chomp
    puts "Enter gender: "
    gender = gets.chomp
    puts "Enter species: "
    species = gets.chomp
    puts "Enter no of toys: "
    toys = gets.chomp
    new_animal = Animal.new(animal_name, animal_age, gender, species, toys)
    $shelter[:animals].push(new_animal)
  elsif response == '3'
    $shelter[:animals].each do |animal|
    puts animal.profile  ##using the profile method on each animal(item) in the array
    end
  elsif response == '4'
    $shelter[:clients].each do |client|
    puts client.profile
    end
  end
end
end
  # elsif response == '5'
  #which animal would you like to adopt?
  #display list

  # end


get_info

binding.pry

# ###Objectives:
# - Practice creating objects
#
# - You are the manager at HappiTails animal shelter. You need to manage your
# shelter by storing and manipulating information about clients and animals.

# ###Specification:
# #####Object Specs:
# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.

# - Client:
#   - A client should have a name.
#   - A client should have a number of children.
#   - A client should have an age.
#   - A client should have a list of pets.

# - Shelter:
#   - The shelter should display all the clients.
#   - The shelter should display all the animals.

# - Relationships:
#   - A client should be able to adopt an animal.
#   - A client should be able to put an animal up for adoption

# #####Phase 1
# - Can create animals and clients

#####Phase 2
# - New animals and clients can be added to the shelter

# #####Phase 3
# - When creating an animal or client, the user is prompted for information like names, gender etc.

# #####Phase 4
# - At start, the user is prompted with a menu of options:
#     - display all animals
#     - display all clients
#     - create an animal
#     - create an client
#     - facilitate client adopts an animal
#     - facilitate client puts an animal up for adoption
#     - After selecting from the menu the task the user is prompted through the entire process
