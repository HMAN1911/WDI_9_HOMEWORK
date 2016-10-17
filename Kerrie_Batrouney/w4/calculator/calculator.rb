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
#


require "byebug"
operator = 0

while operator != 5

  puts "Choose Option:
  1. +
  2. -
  3. *
  4. /
  5. quit
  6. exponential (number 1 to the degree of number 2)
  7. square roots (of number 1 only)
  "

  operator = gets.chomp.to_i
if operator === 5
  break
end

puts "number 1"
num1 = gets.chomp.to_i
if operator!= 7
  puts "number 2"
  num2 = gets.chomp.to_i
  # byebug
end

puts "Answer is:"

case operator
when 1
  answer = num1 + num2
when 2
  answer = num1 - num2
when 3
  answer = num1 * num2
when 4
  answer = num1 / num2
when 6
  puts
  answer = num1**num2
when 7
  puts
  answer = Math.sqrt(num1)
else
  answer = "I have no idea what to do."
end
p answer
puts
end
