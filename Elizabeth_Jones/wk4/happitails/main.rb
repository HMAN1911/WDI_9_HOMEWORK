require 'pry'
require_relative 'animal'
require_relative 'client'

###MENU / INTERFACE

#ANIMALS
animal1 = Animal.new('john-wayne', 5, 'male', 'chihuahua', 2)
animal2 = Animal.new('ruffles', 1, 'female', 'cat', 1) ##created a new object called animal1

#CLIENTS
client1 = Client.new('jane', 45, 0)
client2 = Client.new('sam', 29, 1) #created new client object

# hardcoding
# client1.add_pet(animal1)


#how to access the newly made clients or dogs

# .each_with_index #method to look up
# user input chooses animal from numbers = animal_index
# $shelter[:animals][animal_index]

#SHELTER
$shelter = {
  :animals => [animal1, animal2], #list of animals created
  :clients => [client2] # list of clients created #could be another hash
}

#######################
#
# $shelter = {
#   animals: [],
#   clients: []
# }
#
# $shelter[:animals].push(animal1)
# $shelter[:clients].push(client1)
#
#
#
# jane = $shelter[:clients][0]
#
# jane.add_pet($shelter[:animals][0])
# $shelter[:animals].remove(0)
#
#
# animal_im_looking_for = 'john-wayne'
#
# $shelter[:animals]each_with_index do | animal, index |
#   if (animal.get_name == animal_im_looking_for)
#     puts index
#   end
# end

####################


# shelter2 = {
#   animals: {
#
#   },
#   clients: {
#
#   }
# }



# shelter2[:animals][animal2.get_name] = animal2
#
# shelter2[:animals]['ruffles']


#  JS style = $shelter.animals.push(animal1)

# $shelter.push(animal1)
#
# # creating a new animal with it
# shelter[:animals][animal2.name] = animal2
#
# #
#
# # list all clients
# def client_list
#  @shelter[:clients].each_with_index do |client, index|
#    puts "[#{index + 1}] #{client.get_name}"
#  end
# end


# shelter[:animals] << Animal.new('spot', 'dfsds'dfg 'fdgsd ')

def get_info
  loop do

  puts "1 --- to create new client record\n2 --- to create new animal record\n3 --- to see current animals\n4 --- to see current clients\n5 --- to put animal up for adoption\n6 --- to adopt animal\nq --- to Quit"
  response = gets.chomp

  if response == '1'
    new_client

  elsif response == '2'
    new_animal

  elsif response == '3'
    $shelter[:animals].each do |animal|
    puts animal.profile  ##using the profile method on each animal(item) in the array
    end

  elsif response == '4'
    $shelter[:clients].each do |client|
    puts client.profile
    end

  elsif response == '5' #client wants to adopt
    $shelter[:clients].each do |client|
    puts "Current clients: " + client.display_client_names
    end
    puts "Choose Client who wants to adopt: "
    client_to_adopt = gets.chomp

    $shelter[:animals].each do |animal|
    puts "Current animals: " + animal.display_animal_names
    end

    puts "Choose animal to adopt: "
    animal_to_adopt = gets.chomp

    puts "#{client_to_adopt} adopted #{animal_to_adopt}"

  elsif response == 'q'
    break
  end

  end #ends whole if statement
end



#METHODS -----------------


def new_client
  puts "Enter client name: "
  client_name = gets.chomp

  puts "Enter client age: "
  client_age = gets.chomp

  puts "Enter number of children: "
  children = gets.chomp

  # puts "Enter number of pets: "
  # pets = gets.chomp

  new_client = Client.new(client_name, client_age, children)
  $shelter[:clients].push(new_client)#push the client object into the list of clients
end

def new_animal
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
end

  # elsif response == '5'
  #   puts "Enter animal to put up for adoption: "
  #   # $shelter[:animals].push(...)
  # end
  #
  # elsif response == '6'
  #
  # end


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
