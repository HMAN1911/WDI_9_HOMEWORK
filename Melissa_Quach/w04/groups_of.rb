# Organises a list of items into random groups
items = []
groups = []

puts "enter a list:"
items = gets.strip.split(',')

puts "enter group size:"
size = gets.strip.to_i

# Shuffle items
items.shuffle!

# Separate items into arrays of [size] length
(0..items.length).step(size) do |i|
  groups.push(items.slice(i, size))
end

# If there are any left over items,
# add items to last group
if groups[-1].length < size && groups.length > 1
  remainder = groups.pop
  groups[-1].concat(remainder)
end

# Print groups
groups.length.times do |i|
  puts "Group #{i + 1}: #{groups[i].join(', ')}"
end
