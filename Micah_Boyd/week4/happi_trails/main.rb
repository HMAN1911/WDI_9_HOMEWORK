require 'pry'
require_relative 'shelter.rb'
require_relative 'animal.rb'
require_relative 'client.rb'

##### Phase 4
# - At start, the user is prompted with a menu of options:
#     - display all animals
#     - display all clients
#     - create an animal
#     - create an client
#     - facilitate client adopts an animal
#     - facilitate client puts an animal up for adoption
# - After selecting from the menu the task the user is prompted through the entire process

loop do
  puts 'Menu Options:'
  puts '1 --- Display all animals'
  puts '2 --- Display all clients'
  puts '3 --- Add an animal'
  puts '4 --- Add a client'
  puts '5 --- Client adopts an animal'
  puts '6 --- Client puts an animal up for adoption'
  puts 'm --- Display menu again'
  puts 'q --- Quit'

  menu_response = gets.chomp

  if menu_response == '1'

    if $animals.count > 1

      $animals.each do |animal|
        puts animal.animal_overview
      end

    end

    if $animals.count < 1
      puts 'No animals in the shelter'
    end

  end

  if menu_response == '2'

    if $clients.count > 1

      $clients.each do |client|
        puts client.client_overview
      end

    end

    if $clients.count < 1
      puts 'No clients listed'
    end

  end

  if menu_response == '3'

    loop do

      loop do

        puts 'Animal info:'

        puts 'Name'
        animal_name = gets.chomp
        new_animal = Animal.new(animal_name)

        puts 'Age:'
        age = gets.chomp
        new_animal.animal_age(age)

        puts 'Gender:'
        gender = gets.chomp
        new_animal.animal_gender(gender)

        puts 'Species:'
        species = gets.chomp
        new_animal.animal_species(species)

        puts 'Toys:'
        toys = gets.chomp
        new_animal.animal_toys(toys)

        puts new_animal.animal_overview
        puts 'Is this correct? y/n'
        confimation = gets.chomp

        if confimation == 'y'
          $animals.push(new_animal)
          break
        end

      end

      puts 'Add another animal? y/n'
      another_animal = gets.chomp

      if another_animal == 'n'
        break
      end

    end

  end

  if menu_response == '4'

    loop do

      loop do

        puts 'Client info:'

        puts 'Name'
        client_name = gets.chomp
        new_client = Client.new(client_name)

        puts 'No. of Children:'
        children = gets.chomp
        new_client.num_children(children)

        puts 'Age:'
        age = gets.chomp
        new_client.client_age(age)

        puts 'Pets:'
        pets = gets.chomp
        new_client.client_pets(pets)

        puts new_client.client_overview
        puts 'Is this correct? y/n'
        confimation = gets.chomp

        if confimation == 'y'
          $clients.push(new_client)
          break
        end

      end

      puts 'Add another client? y/n'
      another_client = gets.chomp

      if another_client == 'n'
        break
      end

    end

  end

  if menu_response == '5'

      loop do # presponse 5 loop

        if $clients.count == 0 && $animals.count == 0
          puts 'No clients or animals listed. Please add clients and animals.'
          break
        end

        if $clients.count == 0
          puts 'No clients listed. Please add clients to adopt animals'
          break
        end

        if $animals.count == 0
          puts 'No animals listed. Please add animals to adopt'
          break
        end

        if $clients.count > 0 && $animals.count > 0

          loop do # Make adoption loop

            puts 'Which client would like to adopt?'
            adopter = gets.chomp
            adopter_found = nil
            adopter_pet_list = nil
            adoptee_found = nil
            adoptee_removal = nil

            i = 0
            loop do
              if $clients[i].client_name == adopter
                adopter_found = $clients[i].client_name
                adopter_pet_list = $clients[i].pets
                break # <--- there is a poblem if I dont add break here
              end
              i = i + 1
              break if i > $clients.count
            end

            puts "Which animal would #{adopter_found} like to adopt?"
            adoptee = gets.chomp

            i = 0
            loop do
              if $animals[i].animal_name == adoptee
                adoptee_found = $animals[i].animal_name
                adoptee_removal = $animals[i]
                break # <--- there is a poblem if I dont add break here
              end
              i = i + 1
              break if i > $animals.count
            end

            puts "#{adopter_found} to adopt #{adoptee_found}? Confirm y/n"
            adoption_confirmation = gets.chomp

            if adoption_confirmation == 'y'
              adopter_pet_list.push(adoptee_found)
              $animals.delete(adoptee_removal)
              puts "#{adopter_found} adopted #{adoptee_found} as a pet!"
              break
            end

            if adoption_confirmation == 'n'
              puts '--- Adoption cancelled ---'
              break
            end

          end # Make adoption loop

        end # clients, animals > if statement


        puts 'Would you like to make another adoption? y/n'
        another_adoption = gets.chomp

        if another_adoption == 'n'
          break
        end

      end # presponse 5 loop


  end

  if menu_response == '6'
    puts 'under construction'
  end

  if menu_response == 'm'
    next
  end

  if menu_response == 'q'
    puts 'Goodbye'
    break
  end


end

binding.pry
