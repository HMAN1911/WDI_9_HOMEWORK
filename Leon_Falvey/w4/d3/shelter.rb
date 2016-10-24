require_relative 'client.js'
require_relative 'animal.js'

shelter = {
  :clients => {},
  :animals => {}
}

def display_animals
  puts "Animals: " + "#{shelter[:animals].keys.join(', ')}."
end

def display_clients
  puts "Clients: " + "#{shelter[:clients].keys.join(', ')}."
end

def add_animal
  puts 'Name:'
  name = gets.chomp
  puts 'Age:'
  age = gets.chomp.to_i
  until gender == 'male' || gender == 'female' do
    puts 'Gender:'
    gender = gets.chomp
  end
  puts 'Species:'
  species = gets.chomp
  shelter[:animals][name] = Animal.new(name, age, gender, species)
end

def add_client
  puts 'Name:'
  name = gets.chomp
  puts 'Number of Children:'
  num_children = gets.chomp.to_i
  puts 'Age:'
  age = gets.chomp.to_i
  shelter[:clients][name] = Client.new(name, num_children, age)
end

def adopt_animal
  puts "Type in the client who will be adopting an animal."
  shelter[:animals].length.each_key { |person| puts person}
  client = gets.chomp
end

def put_up_animal

end

puts 'enter 1 to display all animals'
puts 'enter 2 to display all clients'
puts 'enter 3 to add a new animal'
puts 'enter 4 to add a new client'
puts 'enter 5 to have a client adopt an animal'
puts 'enter 6 to have a client put up an animal for adoption'
puts 'enter 7 to have a client\'s child steal an animal\'s toy'
puts 'enter q to exit.'
ans = gets.chomp
case ans
when '1'
  display_animals
when '2'
  display_clients
when '3'
  add_animal
when '4'
  add_client
when '5'
  adopt_animal
end

binding.pry
