class Shelter
  def initialize
    @animals = []
    @clients = []
  end

  def get_animals
    @animals
  end

  def get_clients
    @clients
  end

  # Find animal by name
  def find_animal(name)
    @animals.select { |animal|
      animal.get_name.downcase == name.downcase
    }.first
  end

  # Find client by name
  def find_client(name)
    @clients.select { |client|
      client.get_name.downcase == name.downcase
    }.first
  end

  def add_animal(animal)
    @animals.push(animal)
  end

  def add_client(client)
    @clients.push(client)
  end
end
