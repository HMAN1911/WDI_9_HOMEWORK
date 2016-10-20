
# Phase 3
#
# When creating an animal or client, the user is prompted for information like names, gender etc.

# Class

class Client

  def initialize name, children, age
    @name = name
    @children = children
    @age = age
    @pets = []
  end

  def children
    @children
  end

  def name
    @name
  end

  def age
    @age
  end

  def add_pets add_pet
    @pets.push add_pet
  end

  def remove_pet remove_pet
    if @pets.include? remove_pet
      @pets.delete(remove_pet)
    end
  end
end
