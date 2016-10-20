require 'pry'
require_relative 'animal'
require_relative 'client'
require_relative 'shelter'


def display_menu
  puts 'Press:'
  puts '1. to display all animals'
  puts '2. to display all clients'
  puts '3. to create new animal'
  puts '4. to create new client'
  puts '5. to adopt animal'
  puts '6. to surrender animal'
  puts '\'q\' to quit'
end

def create_animal
  # collects data
  puts 'Enter the animal\'s name?'
  name = gets.chomp
  puts 'Enter the animal\'s age?'
  age = gets.chomp
  puts 'Enter the animal\'s gender? \'f\\m\''
  gender = gets.chomp
  puts 'Enter the animal\'s species?'
  species = gets.chomp
  # creates new animal
  new_animal = Animal.new(name, age, gender, species)
  # collects list of toys
  puts 'Does the animal have any toys? \'y\\n\''
  answer = gets.chomp
  # toys = ''
  if answer == 'y'
    puts 'Enter the animal\'s toys separated by a comma?'
    toys = gets.chomp
  else
    toys = 'none'
  end
  # adds toys to new animal
  new_animal.add_toys(toys)
  # adds new animal to Happitails database
  Happitails.add_animal(new_animal)
end

def create_client
  # collects data
  puts 'Enter the client\'s name?'
  name = gets.chomp
  # collect info on dependants
  puts 'Does the client have children? \'y\\n\''
  answer = gets.chomp
  if answer == 'y'
    puts 'Enter the client\'s number of children?'
    num_children = gets.chomp
  else
    num_children = 0
  end
  puts 'Enter the client\'s age'
  age = gets.chomp
  # creates new client
  new_client = Client.new(name, num_children, age)
  # collects pet info
  puts 'Does the client have any pets? \'y\\n\''
  answer = gets.chomp
  if answer == 'y'
    puts 'List the client\'s pets separated by a comma?'
    pets = gets.chomp
  else
    pets = 'none'
  end
  # adds pets to new client
  new_client.add_pets(pets)
  # adds new client to Happitails database
  Happitails.add_client(new_client)
end


# create shelter
Happitails = Shelter.new

puts 'Happitails Animal Shelter'

# gets current time as a string for login
start_time = Time.now.strftime('%c')
puts "Login successful: #{start_time}"

loop do
  display_menu
  option = gets.chomp

  if option == '1'
    Happitails.display_animals
  elsif option == '2'
    Happitails.display_clients
  elsif option == '3'
    create_animal
    # binding.pry
  elsif option == '4'
    create_client
  elsif option == '5'
    # Adopt_animal
    puts 'Work in progress'
  elsif option == '6'
    # Surrender_animal
    puts 'Work in progress'
  elsif option == 'q'
    # gets current time as a string for log out
    end_time = Time.now.strftime('%c')
    puts "Session ended: #{end_time}"
    break
  else
    puts 'That\'s not a valid option. Please re-select'
  end
end






# ##### Phase 4
# - At start, the user is prompted with a menu of options:
#     - display all animals
#     - display all clients
#     - create an animal
#     - create an client
#     - facilitate client adopts an animal
#     - facilitate client puts an animal up for adoption
# - After selecting from the menu the task the user is prompted through the entire process





# # HappiTails
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
