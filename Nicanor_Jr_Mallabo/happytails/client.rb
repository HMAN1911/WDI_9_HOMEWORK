class Client

    def initialize(name="unknown", children=0, age=0)
        @name = name
        @children = children
        @age = age 
        @pets = {}
    end

    def get_name()
        return @name
    end

    def get_children()
        return @children
    end

    def get_age()
        return @age
    end

    def get_pets()
        return pets
    end

    def set_name(name)
        @name = name
    end

    def set_children()
        @children = children
    end

    def set_age()
        @age = age
    end

    def create()
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



#p p1.get_name(), p1.get_age()
#p p1.print_persons()
#binding.pry