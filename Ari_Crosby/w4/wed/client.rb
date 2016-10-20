

class Client

  def initialize(name, age)
    @name = name
    @age = age
    @pets = []
    puts 'Saved new client'
  end

  def set_name(name)
    @name = name
  end

  def set_age(age)
    @age = age
  end

  def set_num_of_kids(kids)
    @kids = kids
  end

  def set_pets(pet)
    @pets.push(pet)
  end

end
