require 'pry'
puts "Please enter a list, separating itens by comma (,)"
array = gets.chomp.split(',')
array.shuffle!
puts "Please insert a group number:"
groupSize = gets.chomp.to_i

remainder = array.length % groupSize
newArray = []
group = []
totalInside = 0

# array.each do |i|  ----- Not working, ask why (hint i=1 or 0 ?)

 for i in 0..array.length-1
  if i >= (array.length - remainder)
    newArray.last.push(array[i])
  end
  if (totalInside < groupSize)
    group.push(array[i])
    totalInside += 1
    if totalInside == groupSize
      newArray.push(group)
      totalInside = 0
      group = [];
    end

  end
end

binding.pry
