require 'pry'

=begin
Title: Smoothies

Prerequisites:

Ruby
Hashes & Arrays
Blocks
OOP
Objectives:

Exercise working with arrays, strings, and a basic object
Activity:

can work on this lab individually or groups of 2
Explanation

Given a hash of ingredients, write a function called blend.
It should take all the smoothie ingredients (not the measurements) and chop up and mix all the characters and output a mixed string of characters
Be sure to remove the spaces, as we don't want any air bubbles in our smoothie!
Create a class called Blender
It should have a method that takes an array of ingredients and returns a mixed string of characters (blend).
Give the blender an on and off switch and only allow the blender to function when it's on.
FOR SAFETY'S SAKE When you create a new blender by default it should be off.
Blend the the smoothie array

=end


# Every Morning I make a smoothie with the follow ingredients:

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

# Write a function called blend.
# It should take all the smoothie ingredients (not the measurements) and chop up and mix all the characters
# and output a mixed string of characters
# Be sure to remove the spaces, as we don't want any air bubbles in our smoothie!

def blend(smoothie_ingredients)
  smoothie_ingredients.keys.join.gsub(" ","").split("").shuffle.join
end

# DT alternative >>> smoothie_ingredients.keys.join('').chars.shuffle.gsub(' ','')

# create a class called Blender
# It should have a method that takes an array of ingredients and returns a mixed string of characters.
# Give the blender an on and off switch and only allow the blender to function when it's on.
# FOR SAFETY'S SAKE When you create a new blender by default it should be off.
# Blend the the smoothie array

class Blender
   def initialize
     @switched_on = false  # DT just used on
   end

  def blend(smoothie_ingredients)
    if @switched_on == true

    # array - grab keys - make string - subst. spaces - re-create array (single chrs) - shuffle it - return to string
      smoothie_ingredients.keys.join.gsub(" ","").split("").shuffle.join

      # DT alternative >>> smoothie_ingredients.keys.join('').chars.shuffle.gsub(' ','')

    else
      return 'The blender is switched off'
    end
  end

  def turn_switch
    @switched_on = !@switched_on  # ! refers to not    to toggle
  end


end

binding.pry

#  *******  SEE BELOW FOR .pry COMMANDS ETC   *******
#
# [1] pry(main)> Blender.new               ** Using class to create a new object (instance)  **
# => #<Blender:0x007fac030779a0 @switched_on=false>
# [2] pry(main)> blender = Blender.new     ** Assigning the new object to a variable for use
# => #<Blender:0x007fac03282df8 @switched_on=false>
# [3] pry(main)> blender.turn_switch       ** Turn blender on (default is off) using variable and def turn_switch
# => true                                  ** Returns true (blender switched on)

      # ** Below - Now blender is on I can run the blender def / function with the ingredients array
# [7] pry(main)> blender.blend(smoothie_ingredients)
# => "nrpseioosbnoarbsdbnnynotebdpirckderaininhefiooeaspleutrsaureralakpscnpuuehbamustaosrsgsanlaaesgscnmrotoctkesbocmypcemrcupielnswegufaoseergitloetiatphaeulalcrawtptsmuaddupihaleuaerasaklewlmspenedsrxbuboiserllakerots"
