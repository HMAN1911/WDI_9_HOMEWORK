puts "enter a list:"
list_string = gets.chomp
puts "enter group size:"
group_size = gets.chomp.to_i

list = list_string.split(/\s*\,+\s*/)

groups = []
group_number = 0

while list.length >= group_size
  temp = []
  for i in 0..group_size-1
    temp.push(list.delete_at(rand(list.length)))
    group_number += 1
  end
  groups.push(temp)
end
groups[-1].concat(list)

p groups