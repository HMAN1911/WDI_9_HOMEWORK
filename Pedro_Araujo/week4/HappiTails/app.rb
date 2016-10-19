require 'pry'
require 'io/console'
require_relative ('animal')
require_relative ('client')

@pet_list = []
@client_list = []
@shelter = [{pets: @pet_list , clients: @client_list}]

def new_pet
  system('clear')
  toys = []
  puts "______________ REGISTER PET ________________"
  puts "What is the name of the animal?"
  name = gets.chomp
  puts "What is it's AGE ?"
  age = gets.chomp
  puts "What is it's GENDER ?"
  gender = gets.chomp
  puts "What is it's SPECIES ?"
  species = gets.chomp
  puts "Does it have a toy? ( y/n )"
  have_toy = yesno
  if have_toy == true
    loop do
      puts "What is the toy?"
      toy = gets.chomp
      toys << toy
      puts "Is there any other toy? ( y/n )"
      have_toy = yesno
      break if have_toy == false
    end
  end
  animal = Animal.new(name,age,gender,species,toys)
  @pet_list << animal
  puts "Pet successfully registered"
end


def new_client
  system('clear')
  puts "______________ REGISTER CLIENT ________________"
  list_pets = []
  puts "What is the name of the client?"
  name = gets.chomp
  puts "What is #{name}'s AGE ?"
  age = gets.chomp
  puts "How many children #{name} have?"
  children = gets.chomp
  puts "Does #{name} have a pet? ( y/n )"
  have_pet = yesno
  if have_pet == true
    display_pets
    loop do
      puts "What is the pet?"
      pet = gets.chomp
      found = false
      @pet_list.each do |item|
        if pet.downcase == item.show_name.downcase
          index_pet = @pet_list.index(item)
          puts 'Pet found!'
          list_pets << item
          found = true
          break
        end
      end
      if found == false
        puts "Pet NOT found!"
      end
      puts "Is there any other pet? ( y/n )"
      have_pet = yesno
      break if have_pet == false
    end
  end
  client = Client.new(name,age,children,list_pets)
  @client_list << client
  puts "Client successfully registered"
end

def yesno
  case $stdin.getch
    when "y" then return true
    when "n" then return false
    else
      puts "Press 'y' or 'n' "
      yesno
  end
end

def display_pets
  system('clear')
  puts '_________________ALL PETS___________________'
  p " #{'NAME'.ljust(15)} #{'AGE'.ljust(8)} #{'SPECIES'.ljust(10)} #{'TOYS'.ljust(30)} "
  @pet_list.each do |item|
    pet_name = item.show_name
    pet_age = item.show_age
    pet_species = item.show_species
    pet_toys = item.show_toys
    p " #{pet_name.ljust(15)} #{pet_age.ljust(8)} #{pet_species.ljust(10)}  #{pet_toys.join(',')}"
  end
end

def display_clients
  system('clear')
  puts '_________________ALL CLIENTS___________________'
  p " #{'NAME'.ljust(15)} #{'AGE'.ljust(8)} #{'CHILDREN'.ljust(10)} #{'PETS'.ljust(30)} "
  @client_list.each do |item|
    name = item.show_name
    age = item.show_age
    children = item.show_children
    length_pets = item.show_pets.length
    pets = []
    for i in 0..length_pets - 1
      pets_names = item.show_pets[i].show_name
      pets << pets_names
    end

    p " #{name.ljust(15)} #{age.ljust(8)} #{children.ljust(10)}  #{pets.join(',')} "
  end
end

def client_adopt
  index_client = -1
  index_pet = -1
  system('clear')
  puts '_________________ADOPT A PET___________________'
  puts "\nWhat is the name of the client?"
  selected_client = gets.chomp
  @client_list.each do |item|
    if selected_client.downcase == item.show_name.downcase
      index_client = @client_list.index(item)
      puts 'Client found!'
      break
    end
  end
  puts "\nWhat is the name of the pet?"
  selected_pet = gets.chomp
  @pet_list.each do |item|
    if selected_pet.downcase == item.show_name.downcase
      index_pet = @pet_list.index(item)
      puts 'Pet found!'
      break
    end
  end
  if index_pet > -1 && index_client > -1
    puts "\nConfirm adoption of #{selected_pet} by client #{selected_client} ? (y/n)"
    conf = yesno
    if conf == true
      @client_list[index_client].adopt(@pet_list[index_pet])
      puts 'Adoption successfull'
    else
      puts 'Adoption cancelled'
    end
  end

end

def for_adoption
  system('clear')
  puts '_________________PET TO BE AVAILABLE FOR ADOPTION___________________'
  puts "\nWhat is the name of the client?"
  selected_client = gets.chomp
  @client_list.each do |item|
    if selected_client.downcase == item.show_name.downcase
      index_client = @client_list.index(item)
      puts "Client found! \n"
      puts "Name: #{item.show_name} , Age: #{item.show_age}"
      puts "Number of Children: #{item.show_children}"

      length_pets = item.show_pets.length
      for i in 0..length_pets - 1
        puts "****** Pet #{i+1} ******"
        puts "Name: #{item.show_pets[i].show_name}"
        puts "Age: #{item.show_pets[i].show_age}"
        puts "Species: #{item.show_pets[i].show_species}"
        puts "Toys: #{item.show_pets[i].show_toys.join(',')}"
        puts "************************"
      end
      puts "\nType the name of the Pet to be left for adoption:"
      left_pet = gets.chomp
      obj_pet = nil
      @pet_list.each do |item2|
        if left_pet.downcase == item2.show_name.downcase
          puts 'Pet found!'
          puts "\nLeave #{left_pet} for adoption? ( y/n )"
          conf = yesno
          if conf == true
              item.leave_for_adoption(item2)
              puts " #{left_pet} is now available for adoption"
          end
          break
        end
      end
      puts "Pet not found!"

    end
  end
  puts "Client not found!"
end

def menu
  system('clear')
  options = ["1 - Display all pets","2 - Display all clients","3 - Register a pet","4 - Register a client","5 - Facilitate client adopts an animal", "6 - facilitate client puts an animal up for adoption"]
  puts "Select an option:"
  selected = 0
  loop do
    puts options
    selected = gets.chomp.to_i
    break if selected > 0 && selected < 7
    puts 'INVALID option. Please select a valid option:'
  end

  case selected
    when 1 then display_pets
    when 2 then display_clients
    when 3 then new_pet
    when 4 then new_client
    when 5 then client_adopt
    when 6 then for_adoption

  end
end
#----------------------------Data ----------------------------------
@pet_list.push(Animal.new("Max" ,"5","male","dog",['toy1','toy2']) )
@pet_list.push(Animal.new("Lucy" ,"1","female","dog",['toy1','toy2']) )
@pet_list.push(Animal.new("Charlie" ,"2","male","dog",['toy1','toy2']) )
@pet_list.push(Animal.new("Molly" ,"2","female","dog",['toy1','toy2']) )
@pet_list.push(Animal.new("Buddy" ,"0","male","dog",['toy1','toy2']) )
@pet_list.push(Animal.new("Daisy" ,"2","female","dog",['toy1','toy2']) )
@pet_list.push(Animal.new("Rocky" ,"7","male","cat",['toy1','toy2']) )

@client_list.push(Client.new("Aaron" ,"31"  , '1', []) )
@client_list.push(Client.new("Burke" ,"23"  , '0', []) )
@client_list.push(Client.new("Chess" , "25" , '1', []) )
@client_list.push(Client.new("Dumbo" , "26" , '2', []) )
@client_list.push(Client.new("Alfred" , "32" ,'3', []) )

#--------------------------- START ---------------------------------
loop do
  menu
  puts "\nPress Enter to continue..."
  gets


end



binding.pry
