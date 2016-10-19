class Client
  def initialize(name, age, number_of_children)
    # @clients = {}
    # @client = client
    @name = name
    @number_of_children = number_of_children
    @age = age
    @pets = []
  end

  # @clients = {'name' => 'Mr Client', 'children' => 2, 'gender' => 'male', 'age' => 40, 'pets' => ['dog', 'cat']}

  # def create_client(new_client)
  #     @clients.push(new_client)   # Take client details and add to clients array
  # end

  def adopt_animal(pet)
    # client adopts an animal
    @pets.push(pet)
  end

  def admit_animal
    #
  end

end
