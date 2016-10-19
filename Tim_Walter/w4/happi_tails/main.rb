require 'pry'
require_relative 'animal'
require_relative 'client'
require_relative 'shelter'

# shelter
@shelter = {
  clients: [],
  animals: []
}

# Dummy Data
@shelter[:animals].push(Animal.new('Schnitzel von Krumm', 1, 'm', 'cat'))
@shelter[:animals].push(Animal.new('Bitzer Maloney', 2, 'f', 'dog'))
@shelter[:animals].push(Animal.new('Muffin McClay', 3, 'f', 'rat'))
@shelter[:animals].push(Animal.new('Bottomley Potts', 4, 'm', 'cow'))
@shelter[:animals].push(Animal.new('Misty', 1, 'f', 'cat'))
@shelter[:clients].push(Client.new('Tim', 10, 1))
@shelter[:clients].push(Client.new('Neo', 11, 2))
@shelter[:clients].push(Client.new('Morpheus', 12, 3))
@shelter[:clients].push(Client.new('Trinity', 13, 4))
@shelter[:clients].push(Client.new('Apoc', 14, 5))


# On start

def on_start


  loop do
    p 'WELCOME TO THE ANIMAL SHELTER'
    p '============================='
    p ''
    p 'CHOOSE AN OPTION:'
    p ''
    p '[1] Display all animals'
    p '[2] Display all clients'
    p '[3] Add an animal'
    p '[4] Add a client'
    p '[5] Adopt a pet'
    p '[6] Return pet'
    p '[0] Exit'
    # Get user input option
    option = gets.chomp.to_i
    if option == 1
      animal_list

    elsif option == 2
      client_list

    elsif option == 3
      p add_animal

    elsif option == 4
      p add_client

    elsif option == 5
      adopt_animal

    elsif option == 6
      return_animal

    elsif option == 0
      p 'Goodbye'
      break

    else
      p 'Not a valid option, choose again'
    end

  end


end




# create animal. Add to shelter
def add_animal
  p 'Enter animal name:'
  animal_name = gets.chomp
  p 'Enter age:'
  age = gets.chomp
  p 'Enter gender: (m/f)'
  gender = gets.chomp
  p 'Enter species:'
  species = gets.chomp
  @shelter[:animals].push(Animal.new(animal_name, age, gender, species))
  return "Animal called #{animal_name} added."
end



# create client. Add to shelter
def add_client
  p 'Enter client name:'
  client_name = gets.chomp
  p 'Enter age:'
  age = gets.chomp
  p 'Enter #kids:'
  num_kids = gets.chomp
  @shelter[:clients].push(Client.new(client_name, age, num_kids))
  return "Client #{client_name} added."
end



# list all clients
def client_list
  all_clients = []
  @shelter[:clients].each do |client|
    all_clients.push(client.get_name)
  end
  p all_clients
end


# list all animals
def animal_list
  all_animals = []
  @shelter[:animals].each do |animal|
    all_animals.push(animal.get_name)
  end
  p all_animals
end

def adopt_animal
  p 'Which client will be adpoting an animal'
  client_list
  client = gets.chomp
  p 'Which animal would you like to adopt'
  animal_list
  animal = gets.chomp
  # find index of animal & client in lists
  client =  client_list.index(client)
  animal =  animal_list.index(animal)

  # add pet to client
  @shelter[:clients][client].add_pet(@shelter[:animals][animal])

  p "#{client_list[client]} has adopted #{animal_list[animal]}"

  # remove animal from shelter
  @shelter[:animals].delete_at(animal)
end


# client puts animal up for adoption. returns it to sheler
def return_animal
    p 'Which client will be returning an animal?'
    client_list
    client = gets.chomp

    p 'Which pet will you be returning?'
    # index of client
    pet_list = @shelter[:clients][client_list.index(client)].list_pets
    p pet_list
    pet = gets.chomp

    # find index of client pet
    pet_to_return = pet_list.index(pet)

    # remove pet from client. sends index of pet to return
    @shelter[:clients][client].remove_pet(pet_to_return)

    # Add pet to shelter
    @shelter[:animals].push.(pet_list[pet_to_return])
end

on_start




binding.pry



##### Phase 4


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
