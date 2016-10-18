puts "Enter a list of items seperated by a space"
items = gets.chomp.split(" ")
puts "Enter group size"
size = gets.chomp.to_i
items_grouped = items.each_slice(size).to_a

if items_grouped[-1].length < size
  items_grouped[-2].concat(items_grouped[-1])
  items_grouped.pop
end

p items_grouped
