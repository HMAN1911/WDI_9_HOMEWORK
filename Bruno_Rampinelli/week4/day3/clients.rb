# - Client:
#   - A client should have a name.
#   - A client should have a number of children.
#   - A client should have an age.
#   - A client should have a list of pets.

class Client

  def initialize client_name, age, children
  @client_name = client_name
  @age = age
  @children = children
  @pets = []
  end

  def get_client_name
    @client_name
  end

  def get_age
    @age
  end
  def get_children
    @children
  end
  def get_pets
    @pets
  end

  def add_pet(pet)
    @pets.push(pet)
  end

end
