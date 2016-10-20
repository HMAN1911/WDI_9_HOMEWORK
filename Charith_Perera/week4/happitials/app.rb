require 'pry'
require_relative 'Animal'
require_relative 'Client'
require_relative 'Shelter'

input = ""
valid_choices = [1, 2, 3, 4, 5, 6, 7]
the_shelter = Shelter.new

# DUMMY DATA
# charith = Client.new("Charith", 12, 12)
# perera = Client.new("Perera", 32, 23)
# rufus = Animal.new("Rufus", 12, "Male", "Canine", ["asd","asd","dsf"])
# lucy = Animal.new("Lucy", 12, "Male", "Feline", ["asd","asd","dsf"])
# the_shelter.add_client(charith)
# the_shelter.add_client(perera)
# the_shelter.add_animal(rufus)
# the_shelter.add_animal(lucy)

def display_menu
  puts "1) Display All Animals"
  puts "2) Display All Clients"
  puts "3) Create an Animal"
  puts "4) Create a client"
  puts "5) Adopt An Animal"
  puts "6) Put for Adoption"
  puts "7) Quit"
  gets.chomp.to_i
end

def create_animal
  toys_choice = ""
  all_toys = ""

  puts "\nEnter new animals details:"
  puts "Name:"
  name = gets.chomp
  puts "Age:"
  age = gets.chomp
  puts "Gender:"
  gender = gets.chomp
  puts "Species"
  species = gets.chomp
  loop do
    puts "Toys?"
    toys_choice = gets.chomp.downcase
    break if ['y', 'n'].include? toys_choice
  end
  if toys_choice == "y"
    puts "Enter toys seperated by a comma:"
    all_toys = gets.chomp
  end
  Animal.new(name, age, gender, species, all_toys.delete(" ").split(","))
end

def create_client
  puts "\nEnter new client details:"
  puts "Name:"
  name = gets.chomp
  puts "Number of Children:"
  num_children = gets.chomp
  puts "Age:"
  age = gets.chomp
  Client.new(name, num_children, age)
end

def choose_client(shelter)
  input = ""
  loop do
    puts"\n Please choose a client:"
    puts shelter.print_clients
    input = gets.chomp.to_i
    break if input > 0 && input <= shelter.total_clients
  end
  shelter.get_client(input-1)
end

def choose_adopt(shelter)
  input = ""
  loop do
    puts"\n Please choose an animal to adopt:"
    puts shelter.print_animals
    input = gets.chomp.to_i
    break if input > 0 && input <= shelter.total_animals
  end
  shelter.get_animal(input-1)
end

def choose_give(client)
  input = ""
  loop do
    puts"\n Please choose an animal to give:"
    puts client.print_pets
    input = gets.chomp.to_i
    break if input > 0 && input <= client.total_pets
  end
  client.get_pet(input-1)
end


loop do
  loop do
    input = display_menu
    break if valid_choices.include? input
  end

  case input
  when 1
    puts the_shelter.print_animals
  when 2
    puts the_shelter.print_clients
  when 3
    the_shelter.add_animal(create_animal)
  when 4
    the_shelter.add_client(create_client)
  when 5
    if the_shelter.total_clients == 0
      puts "There are no clients to adopt any pets\n\n"
    end

    if the_shelter.total_animals == 0
      puts "The Shelter is out of pets sorry!\n\n"
    end

    if the_shelter.total_clients > 0 && the_shelter.total_animals > 0
      client = choose_client(the_shelter)
      animal = choose_adopt(the_shelter)
      the_shelter.give_adoption(client, animal)
      puts "#{client.get_name} adopted #{animal.get_name}\n\n"
    end
  when 6
    if the_shelter.total_clients == 0
      puts "There are no clients to give any pets\n\n"
    else
      client = choose_client(the_shelter)
      unless client.total_pets == 0
        animal = choose_give(client)
        the_shelter.take_from_client(client, animal)
        puts "#{client.get_name} gave away #{animal.get_name}\n\n"
      else
        puts "This client has no pets choose another one\n\n"
      end
    end
  when 7
    break
  end
end
