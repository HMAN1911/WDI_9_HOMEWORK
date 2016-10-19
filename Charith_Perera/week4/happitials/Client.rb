class Client
  def initialize(name, num_children, age)
    @name = name
    @num_children = num_children
    @age = age
    @pets = []
  end

  def add_pet(new_pet)
    @pets.push(new_pet)
  end

  def remove_pet(animal)
    @pets.delete(animal)
  end

  def get_pet(index)
    @pets[index]
  end

  def total_pets
    @pets.length
  end

  def print_pets
    output = "Pets to give away\n\n"
    @pets.each_with_index { |pet, index| output += "[#{index + 1}]#{pet.to_s}\n\n" }
    output
  end

  def get_name
    @name
  end

  def to_s
    output = "\t#{@name}\n\tNumber of Children: #{@num_children}\n\tAge: #{@age}\n\tPets: "
    if @pets.length > 0
      my_pets = []
      @pets.each do |pet|
        my_pets.push(pet.get_name)
      end
      output += "#{my_pets.join(", ")}"
    else
      output += "No pets"
    end
    output
  end
end
