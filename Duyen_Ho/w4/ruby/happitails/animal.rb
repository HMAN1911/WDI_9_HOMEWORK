class Animal

  def initialize name, age, gender, species
    @name = name.capitalize
    @age = age.to_i
    @gender = gender.downcase
    @species = species.capitalize
    @toys = []
  end

  def add_toys input
    if input.downcase == 'none'
      @toys << input.downcase
    else
      @toys << input.split(',').map(&:capitalize)
      @toys = @toys.flatten
    end
  end

end


# Notes:
# 12 => input becomes nested array when appended to @toys
# 13 => flatten method returns new flattened one-dimensional array


# - Animal:
#   - An animal should have a name.
#   - An animal should have an age.
#   - An animal should have a gender.
#   - An animal should have a species.
#   - An animal can have multiple toys.
