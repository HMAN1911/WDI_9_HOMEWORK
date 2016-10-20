# Practice creating objects
# You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals.
# Specification:
# Object Specs:
# Animal:
# An animal should have a name, an age, a gender, a species, multiple toys.
# Client:
# A client should have a name, a number of children, an age, a list of pets.
# Shelter:
# The shelter should display all the clients or all the animals.
# Relationships:
# A client should be able to adopt an animal.
# A client should be able to put an animal up for adoption
# Phase 1
# Can create animals and clients
# Phase 2
# New animals and clients can be added to the shelter
# Phase 3
# When creating an animal or client, the user is prompted for information like names, gender etc.
# Phase 4
# At start, the user is prompted with a menu of options:
# display all animals
# display all clients
# create an animal
# create an client
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process


require 'pry'
require_relative 'animal'
require_relative 'client'

# when I make the animals, put them into the shelter, same with clients
shelter = {
  animals: [],
  clients: []
}
toys = []
pets = []
option = 0

 #create some animals in residence and existing clients from the start
new_animal = Animal.new('Ruby', 10, 'f', 'dog', ['chew, teddy'])
shelter[:animals].push(new_animal)
new_animal = Animal.new('Charlie', 8, 'm', 'dog', ['teddy'])
shelter[:animals].push(new_animal)
new_animal = Animal.new('Philip', 4, 'm', 'cat', ['mouse'])
shelter[:animals].push(new_animal)
new_animal = Animal.new('Sid', 2, 'm', 'reptile', [])
shelter[:animals].push(new_animal)
new_client = Client.new('Molly', 0, 22, 0)
shelter[:clients].push(new_client)
new_client = Client.new('Emily', 5, 33, 3)
shelter[:clients].push(new_client)

loop do
  puts 'Welcome to HappiTails animal shelter, how can we help you today?'
  puts 'select'
  puts '1. See all animals available for adoption'
  puts '2. See our clients'
  puts '3. Add an animal to the shelter'
  puts '4. Sign up as a client'
  puts '5. Adopt an animal'
  puts '6. Surrender an animal to the shelter'
  puts '7. Exit'

#loop to wait for next choice not working
# do while option != 7
option = gets.chomp.to_i

  if option == 1

  for i in 0..shelter[:animals].length-1
    if shelter[:animals][i].get_animal_gender == 'f'
      puts "#{shelter[:animals][i].get_animal_name} is a female #{shelter[:animals][i].get_animal_species} aged #{shelter[:animals][i].get_animal_age.to_s}, she comes with #{shelter[:animals][i].get_animal_toys}"
    else
      puts "#{shelter[:animals][i].get_animal_name} is a male #{shelter[:animals][i].get_animal_species} aged #{shelter[:animals][i].get_animal_age.to_s}, he comes with #{shelter[:animals][i].get_animal_toys}"
    end
  end

  elsif option == 2
  #2 print out clients
  for i in 0..shelter[:clients].length-1
    puts "#{shelter[:clients][i].get_client_name}, #{shelter[:clients][i].get_client_age.to_s}, has #{shelter[:clients][i].get_client_kids.to_s} kids and #{shelter[:clients][i].get_client_pets.to_s} pets"
  end

  elsif option == 3
  #3 add animal to shelter
  #create new animal
    puts "Animal's name?"
      name = gets.chomp.downcase
    puts "#{name}'s age?"
      age = gets.chomp
    puts "#{name}'s gender m or f?"
      gender = gets.chomp.downcase
    puts "We only accept dogs, cats or reptiles, what species is #{name}?"
      species = gets.chomp.downcase

    puts "Did #{name} bring any toys? Type list of toys eg 'bone, teddy, ball'  or enter"
      toys = gets.chomp.downcase
      toys = toys.split(",")

    new_animal = Animal.new(name, age, gender, species, toys)
    shelter[:animals].push(new_animal)


  elsif option == 4
  #4 add client to shelter
  #create new client

    puts "Client's name?"
      client = gets.chomp.downcase
    puts "Number of children in the family?"
      kids = gets.chomp
    puts "Client age?"
      c_age = gets.chomp
    puts "Does #{client} already have any pets? Type number of pets or 0"
      pets = gets.chomp

    new_client = Client.new(client, kids, c_age, pets)
    shelter[:clients].push(new_client)


# not working yet
  elsif option == 5
  #5 for adoption, remove animal from shelter and add it to client
    puts "Name of animal you wish to adopt?"
    lucky = gets.chomp
    for i in 0..shelter[:animals].length-1
      if  shelter[:animals][i].get_animal_name == lucky
        shelter[:animals].delete_at(i)
        break
      end
    end
      puts "Name of client adopting?"
      adopter = gets.chomp
      for i in 0..shelter[:clients].length-1
        if  shelter[:clients][i].get_client_name == adopter
          binding.pry
          shelter[:clients][i].add_pets(1)
          break
        end
      end


        # cid = shelter[:clients].index(adopter)
        # shelter[:clients][cid].get_client_pets +=1
        # binding.pry


  elsif option == 6
    #6 for surrender, remove animal from client, add it to shelter

  elsif option ==7
    break


  end
end



#
#
#

binding.pry



#
# puts "Hello, do you want to adapt or surrender d/s?"
#
# if gets.chomp.downcase == 'd'
#
#
#
# elsif gets.chomp.downcase == 's'
