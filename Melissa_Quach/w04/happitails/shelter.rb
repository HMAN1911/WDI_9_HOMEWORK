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

  def add_animal(animal)
    @animals.push(animal)
  end

  def add_client(client)
    @clients.push(client)
  end
end
