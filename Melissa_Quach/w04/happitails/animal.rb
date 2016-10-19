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

  def get_age
    @age
  end

  def get_gender
    @gender
  end

  def get_species
    @species
  end

  def get_toys
    @toys
  end
end
