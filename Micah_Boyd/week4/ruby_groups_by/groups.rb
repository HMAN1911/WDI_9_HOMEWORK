require 'pry'

puts 'Enter group items'
group = gets.chomp.split(',').shuffle
puts 'Enter number of sub-groups'
number = gets.chomp.to_i

groupz = []

loop do

  groupz.push(group.slice!(0, number))

  if group.length == 0
    groupz.push(group.slice!(0)).compact!
    last = groupz[groupz.length-1] + groupz[groupz.length-2]
    groupz.pop
    groupz.push(last)
  end

  break if group.length == 0 && group.length < number

end

p groupz


# combinations = group.permutation(number).to_a
#
# slice = combinations.slice(0,1)

# puts slice

# if number.odd?
#   puts 'odd number'
# end

# group.slice

# binding.pry
