require 'pry'

# ###Specification:
# #####Object Specs:
# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.

##put the adoption method inside the clie nt class
##put the dog with client in the client array

class Animal
  def initialize(animal_name, animal_age, gender, species, toys)
    @animal_name = animal_name
    @animal_age = animal_age
    @gender = gender
    @species = species
    @toys = toys
  end

  def get_name
    return @animal_name
  end

  def get_age
    return @animal_age
  end

  def get_gender
    return @gender
  end

  def get_species
    return @species
  end

  def get_toys
    return @toys
  end

  def profile
    return "#{@animal_name} is a #{@animal_age} year old #{@gender} #{@species} with #{@toys} toys."
  end

end
