# in groups of
#
# write a program in ruby that randomly organize a list of things into groups
#
# prompts the user for a list of things and store them inside an array
# prompts the user for a group size
# randomly assign things into groups with size given
# print out the groups in whatever way you like
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

puts 'enter a list e.g. john,tom,ron,peter,jason'
group = gets.chomp.split(',')
puts 'enter group size'
size = gets.to_i
p group
puts group.length

group2 = group.shuffle.each_slice(size).to_a

if group.length % size != 0
  leftOut = group2.pop().join()
  group2[-1].push(leftOut)
end

p group2
