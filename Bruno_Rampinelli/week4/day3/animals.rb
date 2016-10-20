##### Object Specs:
# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.


class Animal
  def initialize name, animal_age, gender, species, toys
  @name = name
  @animal_age = animal_age
  @gender = gender
  @species  =species
  @toys = toys
end

def get_name
  @name
end

def get_animal_age
  @animal_age
end

def get_gender
  @gender
end
def get_species
  @species
end
def get_toys(toys)
  @toys
end
end
