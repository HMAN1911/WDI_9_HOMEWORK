require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'

$shelter = []
$clients = []
a1 = Animal.new('Spot', 'Male')
c1 = Client.new('Mrs Smith', 32)

puts "Welcome to Happy-Tails Animal Shelter, How can we help you?\n"  #(press 'm' for menu)
#response = gets.chomp
#  if ( response == 'm' )
  puts "\n~~~~~~~~~~< Main Menu >~~~~~~~~~~"
  puts "\nChoose a number:"
  puts "1) Animals for adoption."
  puts "2) Client database."
  puts "3) Create new Animal file."
  puts "4) Create new Client file."
  puts "5) Client to adopt an Animal"
  puts "6) Client surrendering an Animal"
  puts "7) Exit"
  response = gets.chomp

  if ( response == '1' )
    print "Animals available #{$shelter.to_s}"
  end

  if ( response == '2' )
    print "Animals available #{$clients.to_s}"
  end

  if ( response == '3' )
    puts "You've chosen to create new Animal file."
    puts "Type the Animal's Name, Gender"
    input = gets.chomp
    

  end

  if ( response == '4' )
    puts "4) Create new Client file."
  end

  if ( response == '5' )
    puts "5) Client to adopt an Animal."
  end

  if ( response == '6' )
    puts "6) Client surrendering an Animal"
  end

  if ( response == '7' )
    puts 'Good bye!'
  Abort
#  end

end
binding.pry
