# ##### Phase 4
# - At start, the user is prompted with a menu of options:
#     - display all animals
#     - display all clients
#     - create an animal
#     - create an client
#     - facilitate client adopts an animal
#     - facilitate client puts an animal up for adoption
# - After selecting from the menu the task the user is prompted through the entire process

require 'pry'
require_relative 'Animal'
require_relative 'Clients'

loop do
  menu = <<-MENU.chomp
  Hi, would you like to:
     - join us as a client
     - dump pet
     - view pets
     - view clients
     - facilitate pet adoption
     - facilitate a pet sacrifice
     - leave our sacrificial home
  MENU
  puts menu

  user_ans = gets.chomp

case user_ans
  when "join us as a client"
    Client.new
  when "dump pet"
    Animal.new
  when "view pets"
    p $shelter
  when "view clients"
    p $clients
  when "facilitate pet adoption"
    p "Hello, what is your name?"
    client_name = gets.chomp
    if $clients.has_key?(client_name)
      p "We have the following animals available for adoption: #{$shelter.keys}.
      Who would you like to adopt?"
      pet_choice = gets.chomp
      if $shelter.has_key?(pet_choice)
        $shelter.delete(pet_choice)
        $clients[client_name][:pets_data] << pet_choice
      else
        p "we not have such a pet!"
      end
    else
      p "You are not an existing client. Please join as a client."
    end
  when "facilitate a pet sacrifice"
    p "Hello, what is your name?"
    ur_name = gets.chomp
    if $clients.has_key?(ur_name)
      p "Who do u want to dump"
      ur_dump = gets.chomp
      if $clients[ur_name][:pets_data].include?(ur_dump)
        $clients[ur_name][:pets_data].delete(ur_dump)
        p "Please give us ur animals' details so that ur animal may be adopted"
        Animal.new
      else
        p "U do not have such a pet"
      end
    else
      p "You are not an existing client. Please join as a client."
    end
  when "leave our sacrificial home"
    p "Thank you for your time. Have a beautiful day!"
    break;
  end
end

def shelter
  $shelter = [$clients, $pets]
  p $shelter
end

# binding.pry
