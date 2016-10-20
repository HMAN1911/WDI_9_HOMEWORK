require 'pry'

# - Client:
#   - A client should have a name.
#   - A client should have a number of children.
#   - A client should have an age.
#   - A client should have a list of pets.


class Client
  def initialize(name, age, kids)
    @name = name
    @age = age
    @kids = kids
    @pets = []
  end

  def get_name
    @name
  end

  def add_pet(pet)
    @pets.push(pet)
  end

  def return_pet(pet)
    @pets.delete_at(pet)
  end

  def list_pets
    @pets
  end


end
