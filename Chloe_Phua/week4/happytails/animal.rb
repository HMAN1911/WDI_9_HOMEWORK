##### Phase 1
# - Can create animals and clients

$shelter = {
  "peewee" => {
    :age_data => '70',
    :gender_data => 'male',
    :species_data => 'cashmere goat',
    :toys_data => ['stick', 'wig']
  },
  "dippy" => {
    :age_data => '29',
    :gender_data => 'female',
    :species_data => 'fruit bat',
    :toys_data => ['potato','banana']
  }
}

class Animal

  def initialize
    p "pet name?"
    @name = gets.chomp
    p "pet age?"
    @age = gets.chomp
    p "pet gender?"
    @gender = gets.chomp
    p "pet species?"
    @species = gets.chomp
    p "pet toys?"
    @toys = gets.chomp.split(' ')
    # save_animal
  end

  def save_animal
    $shelter[@name] = {
      :age_data => @age,
      :gender_data => @gender,
      :species_data => @species,
      :toys_data => @toys
    }
  end
  #probably don't need to save to shelter this way - different class

end

# a = Animal.new()
# $shelter["bob"] = a
#
# puts 'pet name'
