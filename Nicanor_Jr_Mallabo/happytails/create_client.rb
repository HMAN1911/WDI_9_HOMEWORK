require_relative 'client'

class CreateClient
    def initialize()

        add_client()
    end

    def add_client()
        loop do
            #c1 = Client.new()
            print('Enter your name: ')
            $input_name = gets.chomp()
            #c1.set_name($input_name)
            print('Enter your age: ')
            $input_age = gets.chomp()
            print('Enter your childres: ')
            $input_children = gets.chomp()
            loop do
                print('Enter pet: ')
                $pet_input = gets.chomp.to_s()
                break if ($pet_input == nil || $pet_input == "")
            end
            print('Press "Enter" to main menu or press any character to add again: ')
            $got_menu = gets.chomp.to_s
            break if ($got_menu == nil || $got_menu == "")
        end
    end
    
    def navigate_to(what)
        what.new().display()
    end

    

    
end
