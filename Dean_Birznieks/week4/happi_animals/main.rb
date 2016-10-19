require 'pry'
require_relative 'animal'  # this enables you to have multiple .rb files in the one folder
require_relative 'client'
require_relative 'shelter'


deans_shelter = Shelter.new('deans shelter')


loop do
  puts 'provide animal name:'
  animal_name = gets.chomp
  puts 'provide animal age:'
  animal_age = gets.chomp
  puts 'provide animal species'
  animal_species = gets.chomp
  puts 'provide animal gender'
  animal_gender = gets.chomp


  # make new animal
  new_animal = Animal.new(animal_name, animal_age, animal_gender, animal_species)
  # put in shelter
  deans_shelter.add_animal(new_animal)
  # show all animals in shelter
  deans_shelter.display_all_animals
end



# loop do



# end

















# New Client
# puts "Please enter client name"
# name = gets.chomp
# @clients.push name



# new_client = Client.new @name
#
# puts "Please enter number of children client has"
# @children = gets.chomp
# Client.clients.children.push @children
#
# puts "Please enter client age"
# @age = gets.chomp
# Client.clients.age.push @age
#
# puts "Please enter client age"
# @pets = gets.chomp
# Client.clients.pets.push @pets


# shelter = []



binding.pry

# NOTE - Create separate files for each object and main one to bring them together - e.g. animals


# HappiTails
#
# Objectives:
#
# Practice creating objects
#
# You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals.
#
# Specification:
#
# Object Specs:
#
# Animal:
#
# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.
# Client:
#
# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.
# Shelter:
#
# The shelter should display all the clients.
# The shelter should display all the animals.
# Relationships:
#
# A client should be able to adopt an animal.
# A client should be able to put an animal up for adoption
# Phase 1
#
# Can create animals and clients
# Phase 2
#
# New animals and clients can be added to the shelter
# Phase 3
#
# When creating an animal or client, the user is prompted for information like names, gender etc.
# Phase 4
#
# At start, the user is prompted with a menu of options:
# display all animals
# display all clients
# create an animal
# create an client
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process
