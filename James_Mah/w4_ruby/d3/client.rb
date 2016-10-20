class Client
  def initialize(name, num_children, age, pets)
    @name = name
    @num_children = num_children
    @age = age
    @pets = pets
  end

  def get_name
    @name
  end

  def get_num_children
    @num_children
  end

  def get_age
    @age
  end

  def get_pets
    @pets
  end

  def add_pet(animal)
    @pets.push(animal)
  end

  def display_pets()
    puts "\n========CLIENT PETS========"
    for i in 0...@pets.length
      puts "Name: #{@pets[i].get_name}"
      puts "Age: #{@pets[i].get_age}"
      puts "Gender: #{@pets[i].get_gender}"
      puts "Species: #{@pets[i].get_species}"
      puts "Toys: #{@pets[i].get_toys.join(", ")}"
      puts "==========================="
    end
  end
end