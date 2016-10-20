require_relative "animal"
require_relative "client"
require_relative "shelter"

shelter = Shelter.new

menu = [
  'Select an option:',
  '1: Display all animals',
  '2: Display all clients',
  '3. Create an animal',
  '4: Create a client',
  '5. Client adopts an animal',
  '6. Client puts an animal up for adoption',
  '7. Quit'
]

loop do

  puts "\n"
  puts menu
  selection = gets.chomp

  if selection == '1'
    shelter.display_animals shelter.get_all_animals
  elsif selection == '2'
    shelter.display_clients
  elsif selection == '3'
    shelter.add_animal Animal.new
  elsif selection == '4'
    shelter.add_client Client.new
  elsif selection == '5'
    if shelter.get_all_animals.length == 0
      puts "Shelter has no animals to adopt"
    elsif shelter.get_all_clients.length == 0
      puts "There are no clients available"
    else
      client = shelter.get_client
      animal = shelter.get_animal
      client.add_pet animal
      shelter.rem_animal animal
    end
  elsif selection == '6'
    if shelter.get_all_clients.length == 0
      puts "There are no clients available"
    else
      client = shelter.get_client
      if client.get_all_pets.length == 0
        puts "This client has no pets"
      else
        animal = client.get_pet
        shelter.add_animal animal
        client.rem_pet animal
      end
    end
  elsif selection == '7'
    break
  else
    puts 'Please try again:'
  end

end
