# Calculator
# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
# Optional Extensions
# Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4

operations = ['+', '-', '*', '/', 'power of', 'square root', 'quit']
index = 0
operations.each do |operation|
  puts "To calculate #{operation} please press #{index}."
  index += 1
end
index = gets.chomp.to_i
puts 'Please enter the first number.'
num1 = gets.chomp.to_i
while index < 6
  if index != 5
    puts 'Please enter the second number.'
    num2 = gets.chomp.to_i
  end
  if index == 0
    answer = num1 + num2
  elsif index == 1
    answer = num1 - num2
  elsif index == 2
    answer = num1 * num2
  elsif index == 3
    answer = num1 / num2
  elsif index == 4
    answer = num1 ** num2
  elsif index = 5
    answer = Math.sqrt num1
  end
  if index != 5
    puts "#{num1} #{operations[index]} #{num2} = #{answer}"
  else
    puts "The #{operations[index]} of #{num1} = #{answer}"
  end
  puts "Select the next operator"
  index = gets.chomp.to_i
  num1 = answer
end
