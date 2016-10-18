puts 'Put in the size of the groups you wish to add'
group = gets.chomp.to_i
puts 'Put in a loop with , seperating each item'
list  = gets.chomp.split(',')

newList = [];

for i in 0...(list.length/group).to_i do
  newList.push([]);
end

puts newList;
