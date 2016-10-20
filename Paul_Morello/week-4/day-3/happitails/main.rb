require 'pry'
require_relative('animal')
require_relative('client')


menu = ['1. display all animals', '2. display all clients', '3. create an animal', '4. create an client', '5. Adopt an animal', '6. Put an animal up for adoption']

shelter = {
  "animals": [],
  "clients": []
}

# all_clients = Clients.new
# all_animals = Animals.new

loop do

  puts menu
  puts ' '
  puts 'How can we help?'
  answer = gets.chomp

  if answer == '1'

    puts 'Here are the current animals in the shelter'
    puts " "
    shelter[:animals].each_with_index do |animal, index|
      puts animal.name
    end

  end

  if answer == '2'

    puts 'Here are the current clients in the shelter'
    puts " "
    shelter[:clients].each_with_index do |client, index|
      puts client.name
    end

  end

  if answer == '3'

    loop do

      # Create a new Animal

      puts 'Create an animal, what is their name?'
      name = gets.chomp
      puts "What is #{name}'s age?"
      age = gets.chomp
      puts "What is #{name}'s gender?"
      gender = gets.chomp
      puts "What is #{name}'s species?"
      species = gets.chomp
      new_animal = Animal.new name, age, gender, species
      shelter[:animals].push(new_animal)
      puts "Does #{name} have a toy? (y/n)"
      toy = gets.chomp.downcase

  binding.pry

      if toy == 'y'
        loop do
          puts 'What is it?'
          new_toy = gets.chomp
          new_animal.add_toys new_toy
          puts "Add another toy to the list? (y/n)"
          another = gets.chomp.downcase
          break if ['n'].include? another
        end
      end

      puts 'Would you like to add another animal? (y/n)'
      another = gets.chomp.downcase
      break if ['n'].include? another

    end
  end

binding.pry

  if answer == '4'

    loop do

      # Create a new client
      puts 'Create a new Client, what is their name?'
      client_name = gets.chomp
      puts "What is #{client_name}'s age?"
      client_age = gets.chomp
      puts "How many children does #{client_name} have?"
      client_children = gets.chomp
      new_client = Client.new client_name, client_age, client_children
      shelter[:clients].push(new_client)
      puts "Does #{client_name} have a pet? (y/n)"
      pet = gets.chomp.downcase

      binding.pry

      if pet == 'y'
        loop do
          puts 'Whats your pets name?'
          new_pet = gets.chomp
          new_client.add_pets new_pet
          puts "Add another pet? (y/n)"
          another = gets.chomp.downcase
          break if ['n'].include? another
        end
      end

      puts 'Would you like to add another client? (y/n)'
      another = gets.chomp.downcase
      break if ['n'].include? another

     end

  end

  if answer == '5'

    puts 'Which client would like to adopt'
    client = gets.chomp
    find_client = shelter[:clients].find {client}

    puts 'Which animal would you like to adopt?'
    shelter[:animals].each_with_index do |animal, index|
      puts animal.name
    end

    puts " "
    adopt_animal = gets.chomp
    find_animal = shelter[:animals].find {adopt_animal}

    if adopt_animal == find_animal.name && client == find_client.name
      shelter[:animals].delete find_animal
      find_client.add_pets adopt_animal
      puts "Thank you for adopting #{adopt_animal}"
    end

    if adopt_animal == nil
      puts 'That animal does not exist'
    end

  if answer == '6'

    puts 'Which pet would you like to put up for adoption?'
    animal_for_adoption = gets.chomp
    shelter[:animals].push animal_for_adoption

  end

  end

binding.pry

  puts 'Do you need help with anything else? (y/n)'
  another = gets.chomp.downcase
  break if ['n'].include? another

end
