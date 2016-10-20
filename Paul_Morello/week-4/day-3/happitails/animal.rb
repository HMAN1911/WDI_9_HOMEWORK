
# Phase 3
#
# When creating an animal or client, the user is prompted for information like names, gender etc.

# Class

class Animal

  def initialize name, age, gender, species
    @animal_name = name
    @animal_age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def get_animal_for_adoption
    "Name: #{@animal_name} is available for adoption"
  end

  def get_animal_age
    @get_animal_age
  end

  def add_toys new_toy
    @toys.push new_toy
  end

  def remove_toy remove_toy
    if @toys.include? remove_toy
      @toys.delete(remove_toy)
    end
  end
end
