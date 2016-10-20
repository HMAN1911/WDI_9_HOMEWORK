# Client:
# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.

# Phase 1
# Can create animals and clients

# Phase 3
# When creating an animal or client, the user is prompted for information like names, gender etc.

class Client

  def initialize
    puts 'What is the client\'s name?'
    @name = gets.chomp
    puts "How many children does #{@name} have?"
    @children = gets.chomp.to_i
    puts "How old is #{@name}?"
    @age = gets.chomp.to_i
    @pets = []
  end

  def adopt_animal (animal)
    @pets.push animal
  end

  def surrender_animal (index)
    return @pets.slice!(index)
  end

  def to_s
    return "#{@name} is #{@age} years old with #{@children} children and #{@pets.length} pets."
  end

  def name
    return @name
  end

  def display_pets
    @pets.each_with_index do |pet, index|
      puts "Pet #{index}: #{pet.to_s}"
    end
  end

end
