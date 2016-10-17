# groups of
# write a program in ruby that randomly organize a list of things into groups
#
# prompts the user for a list of things and store them inside an array
puts 'Please enter a list of items. Separate each item by typing ", "'
user_items = gets.chomp.split(", ")

# prompts the user for a group size
puts 'How large should each group be?'
group_size = gets.chomp.to_i

# randomly assign things into groups with size given
user_items.shuffle!
groups = user_items.length / group_size
grouped_items = []
while user_items.length > group_size
  grouped_items.push(user_items.slice!(0, group_size))
end
grouped_items.push user_items
# print out the groups in whatever way you like
puts grouped_items.to_s

# enter a list:
# bart,homer,lisa,maggie
# enter group size:
# 2
#
# [['bart','lisa'],['maggie','homer']]
# if there are left overs with the given group size just assign them to the last group
#
# enter a list:
# bart,homer,lisa,maggie,ned
# enter group size:
# 2
#
# [['bart','lisa'],['ned','homer','maggie']]
