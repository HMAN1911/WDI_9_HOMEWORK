require "pry"

p 'CREATE GROUPS'
p '============='

p 'Enter list to sort (comma separated, no spaces)'
list = gets.chomp.split(',')
list = list.shuffle
p list

p 'Enter group size'
group_size = gets.chomp.to_i

# splice the list array into groups of group_size and convert to a new array
groups_result = list.each_slice(group_size).to_a
num_groups = list.length / group_size

last_group = groups_result.length

# this will be the if statement to disseminate the last group
leftover = list.length%group_size


p 'Here are your ' + num_groups.to_s + ' groups'
p groups_result

if leftover > 0
  groups_result[last_group].each_with_index do |e, i|
    # binding.pry
    puts e
    puts "e: #{e}"
    puts "i: #{i}"
    remove_element = groups_result[last_group].pop
    # binding.pry
    groups_result[i].push(remove_element)
  end
groups_result.pop
end



p 'Here are your revised ' + num_groups.to_s + ' groups'
p groups_result


# !!! can get you out of pry when stuck

# # in groups of
#
# write a program in ruby that randomly organize a list of things into groups
#
# 1. prompts the user for a list of things and store them inside an array
# 2. prompts the user for a group size
# 3. randomly assign things into groups with size given
# 4. print out the groups in whatever way you like
#
# ```
# enter a list:
# bart,homer,lisa,maggie
# enter group size:
# 2
#
# [['bart','lisa'],['maggie','homer']]
# ```
#
# if there are left overs with the given group size just assign them to the last group
#
# ```
# enter a list:
# bart,homer,lisa,maggie,ned
# enter group size:
# 2
#
# [['bart','lisa'],['ned','homer','maggie']]
# ```
#
#
