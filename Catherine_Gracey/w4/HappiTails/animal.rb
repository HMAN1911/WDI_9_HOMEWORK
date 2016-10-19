# Animal:
# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.

# Phase 1
# Can create animals and clients

# Phase 3
# When creating an animal or client, the user is prompted for information like names, gender etc.

class Animal

  def initialize
    puts 'What is the animal\'s name?'
    @name = gets.chomp
    puts "How old is #{@name}?"
    @age = gets.chomp.to_i
    puts "Which gender is #{@name}?"
    @gender = gets.chomp
    puts "Which species is #{@name}?"
    @species = gets.chomp
    @toys = []
  end

  def to_s
    return "#{@name} is a #{@age} years old #{@gender} #{@species} with #{@toys.length} toys."
  end

end
