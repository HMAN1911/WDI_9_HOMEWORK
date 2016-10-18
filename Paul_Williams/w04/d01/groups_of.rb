puts 'Enter a list'
list = gets.chomp.split ','
list = list.shuffle
puts 'Enter group size'
size = gets.chomp.to_i

result = []

(list.length / size).downto(1) do
  group = []
  size.downto(1) do
    group.push list.pop
  end
  result.push group
end

# code for last step (push all remaining names to last group):
# result[-1].concat list

# improved last step (split remaining names amongst groups):
(list.length - 1).downto(0) do |i|
  result[i].push list.pop
end

p result

# groups of

# write a program in ruby that randomly organize a list of things into groups

# prompts the user for a list of things and store them inside an array
# prompts the user for a group size
# randomly assign things into groups with size given
# print out the groups in whatever way you like
# enter a list:
# bart,homer,lisa,maggie
# enter group size:
# 2

# [['bart','lisa'],['maggie','homer']]
# if there are left overs with the given group size just assign them to the last group

# enter a list:
# bart,homer,lisa,maggie,ned
# enter group size:
# 2

# [['bart','lisa'],['ned','homer','maggie']]
