class Client

  def initialize

    @pets = []

    puts 'Enter name:'
    set_name gets.chomp

    puts 'Enter age:'
    set_age gets.chomp

    puts 'Enter # of children:'
    set_children gets.chomp

    puts 'Add pets? (y/n)'
    if gets.chomp == 'y'
      count = 1
      loop do
        puts "Adding pet #{count}"
        add_pet Animal.new
        count += 1
        puts "Add another pet? (y/n)"
        break if gets.chomp == 'n'
      end
    end

  end

  def set_name name
    @name = name
  end

  def get_name
    @name
  end

  def set_age age
    @age = age
  end

  def get_age
    @age
  end

  def set_children children
    @children = children
  end

  def get_children
    @children
  end

  def add_pet pet
    @pets.push pet
  end

  def rem_pet pet
    @pets.delete pet
  end

  def get_all_pets
    @pets
  end

  def get_pet
    pet = ""
    puts "Enter pet name:"
    loop do
      name = gets.chomp
      get_all_pets.each do |x|
        if x.get_name == name
          pet = x
          break
        end
      end
      break if pet != ""
      puts "Pet not found, please try again:"
    end
    pet
  end

end
