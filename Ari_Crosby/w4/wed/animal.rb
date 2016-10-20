
class Animal

  def initialize(name, gender)
    @name = name
    @gender = gender
    @toys = []
    #new.Animal.home
    puts 'Saved new animal'
  end

  def set_species(species)
    return species
  end

  def set_name(name)
    @name = name
  end

  def set_age(age)
    @age = age
  end

  def set_gender(gender)
    @gender = gender
  end

  def set_toys(toy) #*p
    @toys.push(toy)
  end

  def set_home(home) #can I push it into the sheler when created?
    #$shelter.push(Animal.new)
  end

end
