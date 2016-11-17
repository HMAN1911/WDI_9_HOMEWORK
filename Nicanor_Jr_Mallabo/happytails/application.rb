require_relative 'create_client'

class Application

    def initialize()
        main_menu()
    end

    def navigate_to(what)
        what.new().display()
        #main_menu()
    end

    def main_menu()
        puts(" ---- Select menu to do ----
            1: Display All Animals
            2: Display All Clients
            3: Create Animals
            4: Create Clients
            5: Adopt Animals")
        
        case gets.strip
            when "1"
                navigate_to(Animal)
            when "4"
                navigate_to(CreateClient)
            
        end
    end
end
 
Application.new()
