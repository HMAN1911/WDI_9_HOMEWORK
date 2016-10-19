require "pry"
require "byebug"


puts "type in your group separated by commas"
big_group = gets.chomp.to_array
puts "what group size?"
group_size = gets.chomp.to_i
p big_group
binding.pry

# number_of_groups = (big_group.length/group_size).to_i

#for length of array, generate a random number between 0 and lenght of array

#for group size, get the items corresponding to the index of the random number_of_groups
