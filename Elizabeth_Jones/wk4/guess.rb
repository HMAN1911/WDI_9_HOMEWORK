# You are to generate a basic "guess my number" game.
#The computer will pick a random number between 0 and 10.
#The user will guess the number until they guess correctly.
#How do I get a number from someone so I can do math?

require 'pry'

##------loops

print "Guess Number Game - enter a maximum value to play"
  max = gets.to_i
  number = rand(max)
loop do
  print "Guess a random number between 1 and #{max}"
  guess = gets.to_i
  if guess == number
    puts "Yes the number is #{guess}"
  elsif guess > number
    puts "too high!"
  elsif guess < number
    puts "too low!"
  end
end




# print "How old are you?"
# age = gets.chomp.to_i
#
# print "How tall are you?"
# height = gets.chomp.to_i
#
#
# print "How much do you weigh? "
# weight = gets.chomp
#
# print "whats your name"
# name = gets.chomp
#
# print "where do you live"
# location = gets.chomp
#
# print "what do you study"
# course = gets.chomp
#
# puts age + height
# puts "So, you're #{age} old, #{height} tall and #{weight} heavy."
# puts "Your name is #{name}, you study #{course} in #{location}."
