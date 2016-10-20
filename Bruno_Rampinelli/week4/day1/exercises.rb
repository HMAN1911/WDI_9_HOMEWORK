require 'fileutils'

# Title: Guess The Number
#
# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

# puts "Hey, let's play a game! gimme a number between 1 and 145"
#
# finalValue=Integer(gets)
# loop do
#   if finalValue > 145
#     puts "Too much mate, the maximum value is 145"
#
# elsif (finalValue > 0 and finalValue <=145)
#   numbers =rand(1..finalValue)
  # puts "Guess a number between 1 and #{finalValue}"
#
#   loop do
#     number =Integer(gets)
#     if number ===numbers
#       puts "U are a geniuos or a lucky b***"
#       break
#     elsif number > numbers
#       puts "Nope, try again. Too much"
#     else puts "Nope, try again. Too low."
#
#     end
#   end
# else
#   put ('what are u typing?Do it again')
# end
# end

# 1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
# 2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.
# 3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
#
# Your choice...
#
# 5. Sort the remaining days alphabetically

# days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
#
#
# # days_of_the_week.pop
# # days_of_the_week.unshift'Sunday'
#
# # but better
# days_of_the_week.unshift(days_of_the_week.pop)
#
# puts days_of_the_week

# days = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']]
#
# days.pop
#     # puts days
#
# string = days[0].sort.join(', ')
# #
# puts string

# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3
#
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
# Optional Extensions
#
# Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4
# result = 0


puts "I am your calculator, tell me what to do"

puts "Please input/
+ for sum
- for sub
* for mult
/ for divide"

operation = gets.chomp

puts "Your first number: "

num1 = Integer(gets)

puts "Your second number: "

num2 = Integer(gets)

if operation == '+'
  result = "#{num1} +#{num2} = #{num1+num2}"
elsif operation == '-'
  result = "#{num1} -#{num2} = #{num1-num2}"
elsif operation == '*'
  result = "#{num1} * #{num2} = #{num1*num2}"
elsif operation == '/'
  result = "#{num1} / #{num2} = #{num1/num2}"
else
  puts "Sorry, I am not so smart"

end
puts "#{result}"
