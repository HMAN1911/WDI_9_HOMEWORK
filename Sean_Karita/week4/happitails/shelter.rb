class Shelter

  def initialize
    @animals = []
    @clients = []
  end

  def animals
    @animals
  end

  def clients
    @clients
  end

  def add_animal(animal)
    @animals.push(animal)
  end

  def add_client(client)
    @clients.(client)
  end

end
