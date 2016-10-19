class Shelter

  def initialize
    @clients = []
    @animals = []
  end

  def add_client client
    @clients.push client
  end

  def get_all_clients
    @clients
  end

  def get_client
    client = ""
    puts "Enter client name:"
    loop do
      name = gets.chomp
      get_all_clients.each do |x|
        if x.get_name == name
          client = x
          break
        end
      end
      break if client != ""
      puts "Client not found, please try again:"
    end
    client
  end

  def display_clients
    count = 1
    get_all_clients.each do |x|
      puts "\n"
      puts "Client #{count}"
      puts "Name: #{x.get_name}, Age: #{x.get_age}, Children: #{x.get_children}"
      if x.get_all_pets.length > 0
        puts "Pets:"
        display_animals x.get_all_pets
      end
      count += 1
    end
  end

  def add_animal animal
    @animals.push animal
  end

  def rem_animal animal
    @animals.delete animal
  end

  def get_all_animals
    @animals
  end

  def get_animal
    animal = ""
    puts "Enter animal name:"
    loop do
      name = gets.chomp
      get_all_animals.each do |x|
        if x.get_name == name
          animal = x
          break
        end
      end
      break if animal != ""
      puts "Animal not found, please try again:"
    end
    animal
  end

  def display_animals animals
    count = 1
    animals.each do |x|
      puts "\n"
      puts "Animal #{count}"
      puts "Name: #{x.get_name}, Age: #{x.get_age}"
      puts "Gender: #{x.get_gender}, Species: #{x.get_species}"
      if x.get_toys.length > 0
        puts "Toys: #{x.get_toys.join(', ')}"
      end
      count += 1
    end
  end

end
