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

# A function / method can exist outside a class in Ruby. More often we have them inside a class
def blend(ingredients)
  blended = ingredients.keys.join.gsub(' ','').split("").shuffle.join
  puts blended
end


#  A class is a way to take a grouping of functions and data and place them inside a container so you can access them with the . (dot) operator.
class Blender
  def initialize (name, power = "off")
    @power = power
    @name = name
  end

  def get_name #method to get name
    @name = name
    return @name
  end

  def blend(ingredients)
    if @power == 'on'
      blended = ingredients.keys.join.gsub(' ','').split("").shuffle.join
    p "Here is your #{@name} smoothie"
    p blended
    else
      p "Power is off. Turn on power to blend"
    end
  end

  def power(power)
    @power = power
    return puts "Blender is #{@power}"
  end


end


# blend(smoothie_ingredients)


b1 = Blender.new("Morning Smoothie")

p b1.power('on')
p b1.blend(smoothie_ingredients)



# Title: Smoothies
# Every Morning I make a smoothie with the follow ingredients:


# Write a function called blend.
# It should take all the smoothie ingredients (not the measurements) and chop up and mix all the characters
# and output a mixed string of characters
# Be sure to remove the spaces, as we don't want any air bubbles in our smoothie!




# create a class called Blender
# It should have a method that takes an array of ingredients and returns a mixed string of characters.
# Give the blender an on and off switch and only allow the blender to function when it's on.
# FOR SAFETY'S SAKE When you create a new blender by default it should be off.
# Blend the the smoothie array

# binding.pry
