class Client
  def initialize(name, children, age)
    @name = name
    @children = children
    @age = age
    @pets = []
  end

  def get_name
    @name
  end

  def get_no_of_children
    @children
  end

  def get_age
    @age
  end

  def get_pets
    @pets
  end

  def adopt_pet(animal)
    @pets.push(animal)
  end

  def remove_pet(animal)
    @pets.delete(animal)
  end
end
