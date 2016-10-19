
class Shelter
  def initialize(name)
    @name = name
    @clients = []
    @animals = []
  end

  def add_client(client)
    @clients.push(client)
  end

  def add_animal(animal)
    @animals.push(animal)
  end

  def display_all_clients
    puts @clients  # display all clients from clients array
  end

  def display_all_animals
    # puts @animals  # display all clients from clients array
    @animals.each do | animal |
      puts animal.show_name
    end
  end

end
#
# binding.pry
