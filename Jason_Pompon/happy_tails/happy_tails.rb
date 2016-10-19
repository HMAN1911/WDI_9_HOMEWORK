require 'pry'

require_relative 'animal.rb'
require_relative 'client.rb'

# some hashes and arrays to hold data
shelter  = {}

clients = []

animals = []



shelter[:List_of_clients] = clients
shelter[:List_of_animals] = animals


ani1 = Animal.new('Bob', 3, 'male', 'shepard')
ani2 = Animal.new('Ronny', 10, 'female', 'jaguar')
ani3 = Animal.new('Billy', 5, 'female', 'batar')

cli1 = Client.new('Jose', 3, 50)
cli2 = Client.new('Antonio', 0, 25)
cli3 = Client.new('Jason', 2, 26)

clients << cli1
clients << cli2
clients << cli2
animals << ani1
animals << ani2
animals << ani3


loop do
  puts 'To display available animals type: DA'
  puts 'To display all current clients type: DC'
  puts 'To create a new client type: C'
  puts 'To create a new animal type: A'
  puts 'To adopt an animal type: adopt'
  puts 'To put an animal for adoption type: put'
  puts 'To exit this menu simply type: quit'
  action = gets.chomp
  if action == 'quit'
    break
  end
  # to give option to create animal or client
  if action == 'C'
    loop do
      puts 'do you want to create a new client (y/n)?'
      response = gets.chomp
      if response == 'y'
        puts 'to create a new client start by entring the name'
        name = gets.chomp
        puts 'number of children?'
        number_of_children = gets.to_i
        puts 'age?'
        age = gets.to_i
        newCli = Client.new(name, number_of_children, age)
        clients << newCli
      elsif response != 'y'
       puts 'What do you want to do next?'
       break
      end
    end
  end
  # to create a new animal
  if action == 'A'
  loop do
      puts 'do you want to create a new animal (y/n)?'
      answer = gets.chomp
      if answer == 'y'
        puts 'name?'
        name = gets.chomp
        puts 'gender?'
        gender = gets.chomp
        puts 'age?'
        age = gets.to_i
        puts 'species?'
        species = gets.chomp
        newAni = Animal.new(name, age, gender, species)
        animals << newAni
      elsif answer != 'y'
        puts 'What do you want to do next?'
        break
      end
    end
  end
# display client list
    if action == 'DC'
      i = 0
      puts "Here's your list of clients:"
      while i < clients.length do
        puts clients[i].get_name
        i += 1
      end
    end
# display animals list
    if action == 'DA'
      i = 0
      puts "Here's your list of animals:"
      while i < animals.length do
        puts animals[i].get_name
        i += 1
      end
    end
# adoption
    if action == 'adopt'
      puts 'your name'
      name = gets.chomp

      puts 'pets name'
      pet_name = gets.chomp

      i = 0
      while i < clients.length do
          if name == clients[i].get_name
            blah = clients[i]
          end
          i += 1
      end

      j = 0
      while j < animals.length do
        if pet_name == animals[j].get_name
          blah.add_pet(animals[j])
          animals.delete_at(j)
        end
        j += 1
      end
    end

end




# put animal for adoption ******* need to complete *********
# k = 0
# while k < 2 do
#   animals << clients[0].remove_pet(0)
#   k += 1
# end


binding.pry
