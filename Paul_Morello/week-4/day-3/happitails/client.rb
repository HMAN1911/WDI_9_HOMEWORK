
# Phase 3
#
# When creating an animal or client, the user is prompted for information like names, gender etc.

# Class

class Client

  def initialize name, children, age
    @client_name = name
    @children = children
    @client_age = age
    @pets = []
  end

  def number_of_children
    @children
  end

  def get_client_name
    @client_name
  end

  def get_age
    @client_age
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
