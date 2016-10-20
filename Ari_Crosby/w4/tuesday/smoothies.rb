require 'pry'

smoothie_ingredients = {
  'flax seeds' => '1 tbsp',
  'chia seeds' => '1 tbsp',
  'coconut flakes' => '1 tbsp',
  'spirulina' => '1 tsp',
  'pumpkin seeds' => '1 tbsp',
  'oatmeal' => '1/4 cup',
  'coco powder' => '1 tbsp',
  'peanut butter' => '1 tbsp',
  'almonds' => '1/4 cup',
  'walnuts' => '1/4 cup',
  'spinach' => '1/4 cup',
  'greek yogurt' => '1/4 cup',
  'nutrional yeast' => '1 tbsp',
  'brussel sprouts' => '1/4 cup',
  'asparagus' => '1/4 cup',
  'kale' => '1/4 cup',
  'brocoli rabe' => '1/4 cup',
  'blue berries' => '1/4 cup',
  'chopped banana' => '1/2 cup',
  'straw berries' => '1/4 cup',
  'mango' => '1/4 cup',
  'hemp milk' => '1 cup'
}
# part 1
blend = []

  smoothie_ingredients.each do |key, value|
    blend.push(key)
end

# puts blend.join('').scan(/\w/).shuffle.join('')
# /\w/ is whitespace

#outputs: ruby smoothies.rb
#mweamosuualphsoedneuastrlndaepsuycsuegsnulaibreektsapalaeearsensulrctsmfstwsmlhrpbtascrruuissrapromegeonncngdocbhblaraiyitaleoinppdoiogaeaepkbfikeouxattspieklsbntrirastrnidaorecpenrreuoanemwseltohospculeeadbcboslak


# Part 2
# input 'blend'(above, an array with just the ingredients) into the blender class

myBlender = new Blender();
myBlender.set_status("off")


class Blender

  def initialize(status = "on") {
    @status = status
  }

  def set_status(newStatus) {
    @status = newStatus

  }

  def get_status() {
    @status
  }

  def blend(array) {

    if (get_status() == "on") {
      # blend


    } else {
      puts "blender is off"
    }


  }

  #   puts "type 'on' to turn on the blender"
  #   input = gets.chomp
  #   if ( input.include? "on" )
  #     power = on
  #   p blend
  #   #break
  #   else
  #
  #   end
  # end


end

binding.pry
