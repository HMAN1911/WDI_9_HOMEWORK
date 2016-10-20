
require 'pry'

# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.

class Animal

  def initialize(name)
    @name = name
  end

  def animal_name
    @name
  end

  def animal_age(age)
    @age = age
  end

  def animal_gender(gender)
    @gender = gender
  end

  def animal_species(species)
    @species = species
  end

  def animal_toys(toys)
    @toys = toys.split(', ')
  end

  def animal_overview
    puts '--- Animal overview: ---'
    puts "   Name: ... #{@name}"
    puts "    Age: ... #{@age}"
    puts " Gender: ... #{@gender}"
    puts "Species: ... #{@species}"
    puts "   Toys: ... #{@toys.join(', ')}"
    puts ''
  end

end

# binding.pry
