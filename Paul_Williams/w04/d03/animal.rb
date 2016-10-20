class Animal
  
  def initialize

    @toys = []

    puts 'Enter name:'
    set_name gets.chomp

    puts 'Enter age:'
    set_age gets.chomp

    puts 'Enter gender:'
    set_gender gets.chomp

    puts 'Enter species:'
    set_species gets.chomp

    puts 'Add toys? (y/n)'
    if gets.chomp == 'y'
      count = 1
      loop do
        puts "Enter toy #{count}"
        add_toy gets.chomp
        count += 1
        puts "Add another toy? (y/n)"
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

  def set_gender gender
    @gender = gender
  end

  def get_gender
    @gender
  end

  def set_species species
    @species = species
  end

  def get_species
    @species
  end

  def add_toy toy
    @toys.push toy
  end

  def get_toys
    @toys
  end

end
