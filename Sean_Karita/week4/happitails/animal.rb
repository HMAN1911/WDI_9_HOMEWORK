require 'pry'

class Animal
  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def name(name)
    @name = name
  end

  def age(age)
    @age = age
  end

  def gender(gender)
    @gender = gender
  end

  def species(species)
    @species = species
  end

  def add_toy(toy)
    @toys.push(toy)
  end

end

binding.pry
