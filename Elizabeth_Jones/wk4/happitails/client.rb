  require 'pry'

class Client
  def initialize(client_name, client_age, children)
    @client_name = client_name
    @client_age = client_age
    @children = children
    @pets = []              ###is this an array or just 'pets'
  end

  def get_name
    return @name
  end

  def get_age
    return @age
  end

  def get_children
    return @children
  end

  def get_pets
    return @pets
  end

  def add_pet(pet)
    @pets.push(pet)
  end

  def remove_pet(pet)
    @pets.delete(pet)
  end

  def display_client_names
    return "#{@client_name}"
  end

  def profile
    return "#{@client_name} is a #{@client_age} year old, with #{@children} children and #{@pets} pets."
  end

  def adoption
    return
  end

end

binding.pry
