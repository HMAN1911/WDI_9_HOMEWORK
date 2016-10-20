class Shelter
  def initialize
    @clients = []
    @animals = []
  end

  def add_client(new_client)
    @clients.push(new_client)
  end

  def add_animal(new_pet)
    @animals.push(new_pet)
  end

  def get_client(index)
    @clients[index]
  end

  def get_animal(index)
    @animals[index]
  end

  def give_adoption(client, animal)
    client.add_pet(animal)
    @animals.delete(animal)
  end

  def take_from_client(client, animal)
    client.remove_pet(animal)
    add_animal(animal)
  end

  def total_clients
    @clients.length
  end

  def total_animals
    @animals.length
  end

  def print_animals
    return "The Shelter currently has no animals\n\n" if total_animals == 0
    output = "Animals available for adoption:\n\n"
    @animals.each_with_index { |animal, index| output += "[#{index + 1}]#{animal.to_s}\n\n" }
    output
  end

  def print_clients
    return "The Shelter currently has no clients\n\n" if total_clients == 0
    output = "Client Information:\n\n"
    @clients.each_with_index { |client, index| output += "[#{index + 1}]#{client.to_s}\n\n" }
    output
  end
end
