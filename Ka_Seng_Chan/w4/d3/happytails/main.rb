require_relative 'animal.rb'
require_relative 'client.rb'
require 'pry'

shelter = {
  clients: [],
  animals: []
}

a1 = Animal.new('Pistol',2,'Male','Dog')
a2 = Animal.new('Wang-Wang',12,'Female','Panda')
a3 = Animal.new('Kong',100,'Male','Gorilla')
a4 = Animal.new('Simba',5,'Male','Lion')
a5 = Animal.new('George',106,'Male','Tortoise')

c1 = Client.new('Johnny',2,32)
c2 = Client.new('Tom',3,45)
c3 = Client.new('Angelina',10,43)
c4 = Client.new('Darwin',2,99)

shelter[:clients] << c1 << c2 << c3 << c4
shelter[:animals] << a1 << a2 << a3 << a4
c4.adopt_pet(a5)

loop do
  puts 'Dodgy Shelter Menu'
  puts '1) Display all animals'
  puts '2) Display all clients'
  puts '3) Create an animal'
  puts '4) Create a client'
  puts '5) Adopts an animal'
  puts '6) Puts up animal for adoption'
  puts '9) Exit'
  print 'Choose a number from the above menu: '
  option = gets.chomp.to_i
  case option
  when 1
    puts "Displaying all animals"
    shelter[:animals].each do |animal|
      puts "=============================="
      # puts "#{animal.get_name} - age #{animal.get_age} - #{animal.get_gender} - #{animal.get_species}"
      puts "Name: #{animal.get_name}"
      puts "Age: #{animal.get_age}"
      puts "Gender: #{animal.get_gender}"
      puts "Species: #{animal.get_species}"
      puts "=============================="
    end
  when 2
    puts "Displaying all clients"
    shelter[:clients].each do |client|
      pets_array = []
      client.get_pets.each { |pet| pets_array << pet.get_name}
      pets_string = pets_array.join(', ')
      # puts "#{client.get_name} - age #{client.get_age} - #{client.get_children} children - pets: #{pets_string}"
      puts "******************************"
      puts "Name: #{client.get_name}"
      puts "No. of children: #{client.get_children}"
      puts "Age: #{client.get_age}"
      puts "Pets: #{pets_string}"
      puts "******************************"
    end
  when 3
    puts 'Creating animal...'
    print 'Enter name of animal: '
    name = gets.chomp.capitalize
    print 'Enter age of animal: '
    age = gets.chomp.to_i
    print 'Enter gender of animal: '
    gender = gets.chomp
    print 'Enter species of animal: '
    species = gets.chomp
    shelter[:animals] << Animal.new(name,age,gender,species)
    puts "#{name} has been added to the list of animals."
  when 4
    puts 'Creating client...'
    print 'Enter name of client: '
    name = gets.chomp.capitalize
    print 'Enter number of children: '
    no_of_children = gets.chomp.to_i
    print 'Enter age of client: '
    age = gets.chomp.to_i
    shelter[:clients] << Client.new(name,no_of_children,age)
    puts "#{name} has been added to the list of clients."
  when 5
    print 'Enter name of animal to be adopted: '
    adoptee_name = gets.chomp
    adoptee = shelter[:animals].find { |animal| animal.get_name == adoptee_name}
    if adoptee == nil
      puts "Could not find matching animal. Please start over."
    else
      print 'Enter name of client adopting the animal: '
      adopter_name = gets.chomp
      adopter = shelter[:clients].find { |client| client.get_name == adopter_name }
      if adopter == nil
        puts "Could not find matching client. Please start over."
      else
        adopter.adopt_pet(adoptee)
        shelter[:animals].delete(adoptee)
        puts "#{adoptee.get_name} has been adopted by #{adopter.get_name}."
      end
    end
  when 6
    print 'Enter name of client: '
    giver_name = gets.chomp
    giver = shelter[:clients].find { |client| client.get_name == giver_name }
    if giver == nil
      puts "Could not find matching client. Please start over."
    else
      print 'Enter name of pet to be given up: '
      pet_name = gets.chomp
      pet = giver.get_pets.find { |pet| pet.get_name == pet_name }
      if pet == nil
        puts "Could not find matching animal. Please start over."
      else
        shelter[:animals] << giver.remove_pet(pet)
        puts "#{pet.get_name} from #{giver.get_name} has been added to shelter."
      end
    end
  when 9
    puts "Exiting..."
    break
  else
    puts 'Invalid input'
  end
end


# binding.pry
