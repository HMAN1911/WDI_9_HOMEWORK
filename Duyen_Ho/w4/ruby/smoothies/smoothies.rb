require 'pry'

# hash
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

# ### Explanation
# - Given a hash of ingredients, write a function called `blend`.
# 	- It should take all the smoothie ingredients (not the measurements) and chop up and mix all the characters and output a mixed string of characters
# 	- Be sure to remove the spaces, as we don't want any air bubbles in our smoothie!

# def blend
#   smoothie = ''
#   smoothie_ingredients.each do |key, value|
#     smoothie.concat(key.gsub(' ',''))
#   end
#   smoothie.split('').shuffle.join
# end

# 31-33 => "flaxseedschiaseedscoconutflakesspirulinapumpkinseedsoatmealcocopowderpeanutbutteralmondswalnutsspinachgreekyogurtnutrionalyeastbrusselsproutsasparaguskalebrocolirabeblueberrieschoppedbananastrawberriesmangohempmilk"
# 34 => "osdokpbrictoolwetkaksuobetileatfaeoersaetlrkeruaunrlaeserciulmeoweehbbpinabicussoeeihetyaoespdspsndoinoapsrenttrlausrkesundolcrmagutbwapyihuatarbasxnmsfnensatcganopeamlnucpdsoaeguslserurdsmprmirpnbpgaessileclrlchaa"


# - Create a class called `Blender`
# 	- It should have a method that takes an array of ingredients and returns a mixed string of characters (`blend`).
# 	- Give the blender an on and off switch and only allow the blender to function when it's on.
# 	- FOR SAFETY'S SAKE When you create a new blender by default it should be off.
# 	- Blend the the smoothie array


class Blender

  def initialize
    @switch = 'off'
  end

  # wrote this but maybe it's better to break it down?
  # def turn_on_off
  #   if @switch == 'off'
  #     @switch = 'on'
  #   else
  #     @switch = 'off'
  #   end
  # end

  def switch_on
    @switch = 'on'
  end

  def switch_off
    @switch = 'off'
  end

  def blend(ingredients) # pass in smoothie_ingredients hash
    # switch needs to be on for this function to work
    if @switch == 'on'
      smoothie = ''
      ingredients.each do |key, value|
        smoothie.concat(key.gsub(' ',''))
      end
      smoothie.split('').shuffle.join
    else
      return 'Turn the blender on'
    end
  end

end

binding.pry

# smoothie = Blender.new
# smoothie.blend(smoothie_ingredients)
# smoothie.switch_on
# smoothie.blend(smoothie_ingredients)
