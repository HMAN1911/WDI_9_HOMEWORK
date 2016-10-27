require_relative 'animal.rb'

class Client
  def initialize(name, num_children, age)
    @name = name
    @num_children = num_children
    @age = age
    @pets = {}
  end

  def add_animal(animal)
    @pets[animal.name] = animal
  end

  def remove_animal(animal)
    return @pets.delete(animal)

  def get_name
    return @name
end
