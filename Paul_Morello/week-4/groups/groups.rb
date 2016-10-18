require 'pry'

puts 'Enter a list:'
list = gets.chomp.split(',')
list.shuffle!

puts 'Enter a group size:'
size = gets.chomp.to_i

new_list = []
group = []
total = 0
remainder = list.length % size

for i in 0..(list.length) -1
  if i >= (list.length - remainder)
    new_list.last.push(list[i])
  end

  if total < size
    group.push(list[i])
    total += 1

    if total == size
      new_list.push(group)
      total = 0
      group = []

    end
  end
end

puts new_list
binding.pry
