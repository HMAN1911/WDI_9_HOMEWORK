class Animal

  def initialize(name, age, gender, species)
    # @animals = {}
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def give_toy(toy)
    @toys.push(toy)
  end

  def remove_toy
    # TODO: implement this!
  end

  def show_name
    return @name
  end

  # @animals = {'name' => 'Rover', 'age' => 2, 'gender' => 'male', 'species' => 'dog', 'toys' => ['bone', 'ball']}

# Animal.new = new_animal

  # def create_animal(new_animal)
  #     #
  # end


end
