require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'

$shelter = []
a1 = Animal.new('Spot', 'Male')
c1 = Client.new('Mrs Smith', 32)

puts "Welcome to Happy-Tails Animal Shelter,\n How can we help you?\n  (press 'm' for menu)"
response = gets.chomp
if ( response == '1' )
  puts 'hello'
end

if ( response == 'm' )
  puts "~~~~~ Main menu ~~~~~\n"
  puts "1) Animals for adoption.\n"
  puts "2) Client database.\n"
  puts "3) Create new Animal file.\n"
  puts "4) Create new Client file.\n"
  puts "5) Client to adopt an Animal\n"
  puts "6) Client surrendering an Animal\n"
  puts "7) Exit"
response = gets.chomp

if ( response == '7' )
    puts 'Good bye!'
Abort
end

end
binding.pry
