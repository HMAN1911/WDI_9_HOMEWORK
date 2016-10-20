class Animal
  def initialize(name, age, gender, species, toys=[])
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
  end

  def get_name
    @name
  end

  def add_toy(new_toy)
    @toys.push(new_toy)
  end

  def to_s
    "\t#{@name}\n\tAge: #{@age}\n\tGender: #{@gender}\n\tSpecies: #{@species}\n\tToys: #{@toys.join(', ')}"
  end
end
