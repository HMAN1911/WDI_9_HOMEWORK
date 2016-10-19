require 'pry'
require_relative 'animal'
require_relative 'client'
require_relative 'shelter'

def new_animal
  print "Name: "
  name = gets.chomp
  print "Age: "
  age = gets.chomp.to_i
  print "Gender: "
  gender = gets.chomp
  print "Species: "
  species = gets.chomp

  toys = []
  catch(:stop) do
    loop do
      print "Toy: "
      toys.push gets.chomp
      loop do
        print "Add another toy? (y/n) "
        another = gets.chomp
        if another == 'y'
          break
        elsif another == 'n'
          throw :stop
        end
      end
    end
  end
  return Animal.new(name, age, gender, species, toys)
end

def new_client
  print "Name: "
  name = gets.chomp
  print "Number of children: "
  num_children = gets.chomp.to_i
  print "Age: "
  age = gets.chomp.to_i

  pets = []
  catch(:stop) do
    loop do
      print "Add a pet? (y/n) "
      add_pet = gets.chomp
      if add_pet == 'y'
        loop do
          puts "\nTell us more about your furry creature."
          pets.push new_animal
          loop do
            print "\nWould you like to add another pet? (y/n) "
            another = gets.chomp
            if another == 'y'
              break
            elsif another == 'n'
              throw :stop
            end
          end
        end
      elsif add_pet == 'n'
        break
      end
    end
  end
  return Client.new(name, num_children, age, pets)
end

# MAIN LOOP
shelter = Shelter.new

shelter.add_client(Client.new('James','0','26',[]))
shelter.add_client(Client.new('Bob','2','32',[]))
shelter.add_client(Client.new('Stacie','8','50',[]))
shelter.add_animal(Animal.new('Meow','1','Male','Cat',['mouse']))
shelter.add_animal(Animal.new('Dog','4','Female','Dog',['stick', 'poop']))

loop do
  puts "\nMENU OPTIONS"
  puts "Please input a digit that corresponds to the following options"
  puts "1. Display all animals"
  puts "2. Display all clients"
  puts "3. Create an animal"
  puts "4. Create a client"
  puts "5. Facilitate client adopts an animal"
  puts "6. Facilitate client puts an animal up for adoption"

  print "Your input: "
  menu_input = gets.chomp.to_i

  case menu_input
  when 1
    if shelter.get_animals.length > 0
      shelter.display_animals()
      print "Press ENTER when done"
      gets
    else
      puts "\nNo animals to display"
      print "Press ENTER when done"
      gets
    end
  
  when 2
    if shelter.get_clients.length > 0
      shelter.display_clients()
      print "Press ENTER when done"
      gets
    else
      puts "\nNo clients to display"
      print "Press ENTER when done"
      gets
    end
  
  when 3
    puts "\nWho is our new addition to the family?"
    shelter.add_animal(new_animal)
  
  when 4
    puts "\nWho is our new favourite client? :D"
    shelter.add_client(new_client)

  when 5
    puts "\nWho is adopting a new pet?"
    print "Name: "
    client_name = gets.chomp
    client_to_adopt = shelter.get_clients.detect{ |client| client.get_name == client_name }

    if client_to_adopt == nil
      puts "\nWe do not have #{client_name} in our database, please create a client first"
      print "Press ENTER when done"
      gets
    else
      if shelter.get_animals.length == 0
        puts "\nSorry there are no animals in the shelter"
        print "Press ENTER when done"
        gets
      else
        print "Press ENTER to view our list of animals"
        gets
        shelter.display_animals()
        puts "\nWhich furry creature would you like to bring home?"

        animal_name = gets.chomp
        shelter_animals = shelter.get_animals
        animal_to_adopt = shelter_animals.detect{ |animal| animal.get_name == animal_name }
        shelter_animals.delete(animal_to_adopt)

        if animal_to_adopt == nil
          puts "\nWe do not have #{animal_name} in our database, sorry please start again"
          print "Press ENTER when done"
          gets
        else
          client_to_adopt.add_pet(animal_to_adopt)
          puts "\nCongrats, you are now a father/mother"
          print "Press ENTER when done"
          gets
        end
      end
    end

  when 6
    puts "\nWho is putting up a pet for adoption?"
    print "Name: "
    client_name = gets.chomp
    client_to_unadopt = shelter.get_clients.detect{ |client| client.get_name == client_name }

    if client_to_unadopt == nil
      puts "\nWe do not have #{client_name} in our database, please create a client first"
      print "Press ENTER when done"
      gets
    else    
      if client_to_unadopt.get_pets.length == 0
        puts "\nSorry client does not have any pets"
        print "Press ENTER when done"
        gets
      else
        print "Press ENTER to view client's pets"
        gets
        client_to_unadopt.display_pets() ######
        puts "\nWhich furry creature would you leave at the shelter?"
        pet_name = gets.chomp
        client_pets = client_to_unadopt.get_pets
        pet_to_unadopt = client_pets.detect{ |pet| pet.get_name == pet_name }
        client_pets.delete(pet_to_unadopt)

        if pet_to_unadopt == nil
          puts "\n#{client_name} does not have #{animal_name} as a pet, sorry please start again"
          print "Press ENTER when done"
          gets
        else
          shelter.add_animal(pet_to_unadopt)
          puts "\nYou have left #{pet_name} at the shelter"
          print "Press ENTER when done"
          gets
        end
      end
    end
  end
end
