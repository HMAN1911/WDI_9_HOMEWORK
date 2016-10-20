require 'pry'

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



def blend smoothie_ingredients
  if on?

  smoothie_ingredients.keys.join.gsub(' ','').split('').shuffle.join
end

# create a class called Blender
# It should have a method that takes an array of ingredients and returns a mixed string of characters.
# Give the blender an on and off switch and only allow the blender to function when it's on.
# FOR SAFETY'S SAKE When you create a new blender by default it should be off.
# Blend the the smoothie array


# DT
# REVIEW


class Blender

  def initialize
    @on = false
  end

  def on?
    @on
  end
  def toggle
    if @on
      @on = false
    else
      @on = true
    end
  def blend smoothie_ingredients
    if on?

    smoothie_ingredients.keys.join.gsub(' ','').split('').shuffle.join
  end
end

end


class Blender
  def initialize(ingredients,switch)
    @ingredients = ingredients.keys
    @switch = off
  end

  def switch_on
    @switch = on
  end
  def switch_off
    @switch = off
  end
  def switch_safe
    if @switch == on
      @switch == off
    else
      @switch = on
    end
  end

  def blend

    if @switch == off
      nil
    else
    mix = @ingredients.join.gsub(' ','').split('').shuffle.join

    return mix

  end
end
end


binding.pry
