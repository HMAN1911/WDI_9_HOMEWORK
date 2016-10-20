
require 'pry'

# - Client:
#   - A client should have a name.
#   - A client should have a number of children.
#   - A client should have an age.
#   - A client should have a list of pets.

class Client

  def initialize(name)
    @name = name
  end

  def client_name
    @name
  end

  def num_children(children)
    @children = children
  end

  def client_age(age)
    @age = age
  end

  def client_pets(pets)
    @pets = pets.split(', ')
  end

  def pets
    @pets
  end

  def client_overview
    puts '--- Client overview: ---'
    puts "     Name: ... #{@name}"
    puts " Children: ... #{@children}"
    puts "      Age: ... #{@age}"
    puts "     Pets: ... #{@pets.join(', ')}"
    puts ''
  end


end

# binding.pry
