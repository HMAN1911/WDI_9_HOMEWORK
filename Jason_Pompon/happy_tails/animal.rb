#this is a class to create a new animal object with certain properties attached to it

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
  # def get_age
  #   @age
  # end
  #
  # def get_gender
  #   @gender
  # end
  #
  # def get_species
  #   @species
  # end

  def add_toys(toys)
    @toys.push(toys)
  end

end
