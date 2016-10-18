
puts 'Enter a list separated by commas:'
list = gets.chomp.split(',')

list = list.shuffle

puts 'Enter group size: '
group_size = gets.to_i

new_list = []

while list.size != 0
  sublist =[]
  if list.size < group_size * 2
    list.size.times do
      sublist << list.pop
    end
  else
    group_size.times do
      sublist << list.pop
    end
  end
  new_list << sublist
  sublist = []
end
p new_list
