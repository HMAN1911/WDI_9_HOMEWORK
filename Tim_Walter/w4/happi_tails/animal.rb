require 'pry'
# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.


class Animal

  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def get_name
    @name
  end

  def add_toy(animal)
    @toys.push(toy)
  end

  def list_toys
    @toys
  end



end
