# # HappiTails
#
# ### Objectives:
# - Practice creating objects
#
# - You are the manager at HappiTails animal shelter. You need to manage your
# shelter by storing and manipulating information about clients and animals.
#
# ### Specification:
# ##### Object Specs:
# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.
#
# - Client:
#   - A client should have a name.
#   - A client should have a number of children.
#   - A client should have an age.
#   - A client should have a list of pets.
#
# - Shelter:
#   - The shelter should display all the clients.
#   - The shelter should display all the animals.
#
# - Relationships:
#   - A client should be able to adopt an animal.
#   - A client should be able to put an animal up for adoption
#
# ##### Phase 1
# - Can create animals and clients
#
# ##### Phase 2
# - New animals and clients can be added to the shelter
#
# ##### Phase 3
# - When creating an animal or client, the user is prompted for information like names, gender etc.
#
# ##### Phase 4
# - At start, the user is prompted with a menu of options:
#     - display all animals
#     - display all clients
#     - create an animal
#     - create an client
#     - facilitate client adopts an animal
#     - facilitate client puts an animal up for adoption
# - After selecting from the menu the task the user is prompted through the entire process
#
#

require 'pry'

require_relative 'animals'
require_relative 'clients'


# list of Animals

a1 = Animal.new('Andy',10,'male','dog','ball')
a2 = Animal.new('Byron',1,'female','cat','tennis_ball')
a3 = Animal.new('Caty',14,'female','cat','cat_house')
a4 = Animal.new('Doggy',7,'male','dog','dog_house')
a5 = Animal.new('Elphy',25,'male','mouse','cheese')
a6 = Animal.new('Funny',12,'female','horse','saddle')

all_animals = [a1,a2,a3,a4,a5,a6]

#List of clients

c1 = Client.new('Adam',35,2,'cat')
c2 = Client.new('Bruno',27,0,'dog')
c3 = Client.new('Charlotte',80,4,'')
# c4 = Client.new ('Danny',51,1,'cat')

all_clients =[c1,c2,c3]

shelter = {}
shelter = [all_animals, all_clients]


# OPERATION TO BE DONE

loop do
  puts "Please, type:

  (animals) to display all the animals
  (clients) to display all the clients
  (add animal) to add an animal
  (add client) to add a client
  (shelter) to display animals & clients
  (adopt) to adopt an animal"



  user_answer = gets.chomp

  if user_answer == 'animals'
    puts "At the moment we have:"
    p all_animals

  elsif user_answer == 'clients'
    puts "Our Clients are: "

    p all_clients

  elsif user_answer == 'add animal'

  puts 'Add an animals'
    loop do
      puts "Name of the animal:"
      name = gets.chomp

      puts "age:"
      animal_age = gets.chomp

      puts "gender:"
      gender = gets.chomp

      puts "species:"
      species = gets.chomp
      puts "toy:"

      toys = gets.chomp

      all_animals.push(Animal.new(name, animal_age,gender,species,toys))

       puts "Add one more animal?"
       answer = gets.chomp
       break if answer == 'no'
    end
  elsif user_answer =='add client'
  puts 'Add a client'

    loop do
      puts "Name of the client:"
      client_name = gets.chomp

      puts "age:"
      age = gets.chomp

      puts "number of children:"
      children = gets.chomp

      puts "pets:"
      pets = gets.chomp
      all_clients.push(Client.new(client_name,age,children,pets))

      puts "Add one more animal?"
      answer = gets.chomp
      break if answer == 'no'

    end
  elsif user_answer == 'shelter'
    puts "Here the complete list:"
    p shelter

  elsif user_answer == 'adopt'
    puts 'Ok, at the momement we have the following species:'
    # p Animal.get_species
    client_species_choice = gets.chomp
    species_client_wants = ''
    if client_species_choice =='dog'
      all_animals.each do |animal|
      animal.get_species== 'dog'
      species_client_wants == animal
    end

  elsif client_species_choice =='cat'
      all_animals.each do |animal|
        if animal.get_species== 'cat'
          species_client_wants == animal
        end


    end
  end
  puts 'We have:'
  p species_client_wants
end

end




binding.pry
