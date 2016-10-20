
# Phase 3
#
# When creating an animal or client, the user is prompted for information like names, gender etc.

# Class

class Animal

  def initialize name, age, gender, species
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def name
    @name
  end

  def age
    @age
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
