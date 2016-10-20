# Shelter:
# The shelter should display all the clients.
# The shelter should display all the animals.

# Phase 2
# New animals and clients can be added to the shelter

# Phase 4
# At start, the user is prompted with a menu of options:
# display all animals
# display all clients
# create an animal
# create an client
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process

class Shelter

  def initialize
    @clients = []
    @animals = []
    show_menu
  end

  def display_animals
    @animals.each_with_index do |animal, index|
      puts "Animal #{index}: #{animal.to_s}"
    end
  end

  def display_clients
    @clients.each_with_index do |client, index|
      puts "Client #{index}: #{client.to_s}"
    end
  end

  def new_animal
    @animals.push Animal.new
  end

  def new_client
    @clients.push Client.new
  end

  def select_client
    puts "Which client are you helping today?"
    display_clients
    client = gets.chomp.to_i
    return client
  end

  def select_animal
    puts "Which animal are you helping today?"
    display_animals
    animal = gets.chomp.to_i
    return animal
  end

  def adopt_animal
    client = @clients[select_client]
    animal = @animals.slice!(select_animal)
    client.adopt_animal(animal)
  end

  def surrender_animal
    client = @clients[select_client]
    puts "Which pet is #{client.name} surrendering?"
    client.display_pets
    animal = gets.chomp.to_i
    @animals.push(client.surrender_animal(animal))
  end

  def show_menu
    loop do
      puts 'Welcome to HappiTails Shelter. What would you like to do today?'
      puts 'Select 1 to display all animals'
      puts 'Select 2 to display all clients'
      puts 'Select 3 to add a new animal to our records'
      puts 'Select 4 to add a new client to our records'
      puts 'Select 5 to help a client adopt an animal'
      puts 'Select 6 to help a client surrender an animal'
      puts 'Or type "EXIT" to leave the shelter'
      selection = gets.chomp.upcase
      break if selection == "EXIT"
      if selection == "1"
        display_animals
      elsif selection == "2"
        display_clients
      elsif selection == "3"
        new_animal
      elsif selection == "4"
        new_client
      elsif selection == "5"
        adopt_animal
      elsif selection == "6"
        surrender_animal
      end
    end
  end

end
