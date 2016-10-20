require 'pry'

class Animal

  def initialize(name, age, gender, species, toys)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
  end

  def get_animal_name
    return @name
  end

  def get_animal_age
    return @age
  end

  def get_animal_gender
    return @gender
  end

  def get_animal_species
      return @species
  end

  def get_animal_toys
    return @toys
  end

  def list_animals
      @name.each do|animal|
        puts animal.get_animal_name
      end
  end
  # binding.pry
end
