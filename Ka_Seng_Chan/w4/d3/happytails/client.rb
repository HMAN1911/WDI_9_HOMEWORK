
class Client

  def initialize(name,no_of_children,age)
    @name = name
    @no_of_children = no_of_children
    @age = age
    @pets = []
  end

  def get_name
    @name
  end

  def get_children
    @no_of_children
  end

  def get_age
    @age
  end

  def get_pets
    @pets
  end

  def adopt_pet(pet)
    @pets << pet
  end

  def remove_pet(pet)
    @pets.delete(pet)
  end

end
