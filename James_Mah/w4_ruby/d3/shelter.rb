class Shelter
  def initialize()
    @animals = []
    @clients = []
  end

  def get_animals()
    @animals
  end

  def get_clients()
    @clients
  end

  def add_animal(animal)
    @animals.push(animal)
  end

  def add_client(client)
    @clients.push(client)
  end

  def display_animals()
    puts "\n==========ANIMALS=========="
    for i in 0...@animals.length
      puts "Name: #{@animals[i].get_name}"
      puts "Age: #{@animals[i].get_age}"
      puts "Gender: #{@animals[i].get_gender}"
      puts "Species: #{@animals[i].get_species}"
      puts "Toys: #{@animals[i].get_toys.join(", ")}"
      puts "==========================="
    end
  end

  def display_clients()
    puts "\n==========CLIENTS=========="
    for i in 0...@clients.length
      puts "Name: #{@clients[i].get_name}"
      puts "Number of children: #{@clients[i].get_num_children}"
      puts "Age: #{@clients[i].get_age}"
      animals_array = []
      @clients[i].get_pets.each do |animal|
        animals_array.push(animal.get_name)
      end
      puts "Pets: #{animals_array.join(", ")}"
      puts "============================"
    end
  end
end