require 'pry'
class Client

  def initialize(name, children, age)
    @name = name
    @children = children
    @age = age
    @pets = []
  end

  def name(name)
    @name = name
  end

  def children(children)
    @children = children
  end

  def age(age)
    @age = age
  end

  def pets(pets)
    @pets = pets
  end

end




binding.pry
