# The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"


require 'pry'
require 'fileutils'


puts "Random number maximum?"
maxnum = gets.chomp.to_i
rand_num = rand(0...maxnum)
puts rand_num
# guess=gets
guess_no = 0
#not trying to guess froever, just 10 times
while guess_no < 10
puts "guess please"
  guess=gets.chomp.to_i
    # binding.pry
  if guess === rand_num
    puts 'well done you guessed correctly'
    break
  end
  puts 'try again'
  guess_no +=1
end



#
# hackers = gets.chomp.split(',')
#
#  hackers.each do |hacker|
#   folder_name =  hacker.downcase.gsub(' ', "_")
#   FileUtils.mkdir folder_name
#   # change dir into this newly created folder and touch a new file called readme.md
#   FileUtils.cd folder_name do
#     FileUtils.touch 'README.md'
#   end
#  end

#
# if 13>10
#   puts '13 is greater than 10'
# end
#
# number=0 #default to local
#
# while number < 5
#   puts number
#   number +=1
# end
#
#
# dumplings_devoured=0
# loop do
#   puts 'eat one dumpling'
#   dumplings_devoured+=1
#     break if dumplings_devoured >20
# end
#
# simpsons = ['bart', 'lisa', 'homer', 'ned']
#
# puts simpsons[0]
# puts simpsons[simpsons.length-1]
# puts simpsons[-1]
# puts simpsons[-2]
# puts simpsons[100]
#
# simpsons.push('maggie')
# simpsons.shift #removes Bart
# puts simpsons
# puts simpsons.to_s
# p simpsons
#
# puts "hello your first name is #{2+2}"
# puts "hello your name is #{'bar' + 'code'}"
