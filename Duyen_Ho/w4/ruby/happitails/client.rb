class Client

  def initialize name, num_children, age
    @name = name.capitalize
    @children = num_children.to_i
    @age = age.to_i
    @pets = []
  end

  def add_pets input
    if input.downcase == 'none'
      @pets << input.downcase
    else
      @pets << input.split(',').map(&:capitalize)
      @pets = @pets.flatten
    end
  end

end


# Notes:
# 14 => input becomes nested array when appended to @pets
# 15 => flatten method returns new flattened one-dimensional array


# - Client:
#   - A client should have a name.
#   - A client should have a number of children.
#   - A client should have an age.
#   - A client should have a list of pets.
