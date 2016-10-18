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

operations = ['+', '-', '*', '/', 'power of', 'root of', '=']

# build equation
equation = []

index = 0
while index < 6
  puts 'Please enter a number.'
  num = gets.chomp.to_i
  equation.push num
  index = 0
  operations.each do |operation|
    puts "To calculate #{operation} please press #{index}."
    index += 1
  end
  index = gets.chomp.to_i
  equation.push operations[index]
  puts equation.join ' '
end

# Save original equation so that I can manipulate the array
solution = equation.join ' '

# Get rid of equals sign from array
equation.pop

# Parentheses, Exponents, Multiplication and Division, and Addition and Subtraction

firstExponent = equation.index('power of')
firstPower = equation.index('root of')

while firstExponent != nil || firstPower != nil
  puts 'Entering while loop'
  puts "firstExponent is #{firstExponent}"
  puts "firstPower is #{firstPower}"
  puts equation.join " "
  if firstExponent == nil # There is only a root of
    equation[firstPower - 1] = equation[firstPower - 1] ** (equation[firstPower + 1] ** -1)
    equation.delete_at firstPower
    equation.delete_at firstPower
  elsif firstPower == nil # There is only an exponent
    equation[firstExponent - 1] = equation[firstExponent - 1 ] ** equation[firstExponent + 1]
    equation.delete_at firstExponent
    equation.delete_at firstExponent
  else # There is a power and an exponent
    if firstExponent < firstPower # Exponent appears first
      equation[firstExponent - 1] = equation[firstExponent - 1 ] ** equation[firstExponent + 1]
      equation.delete_at firstExponent
      equation.delete_at firstExponent
    else # Power appears first
      equation[firstPower - 1] = equation[firstPower - 1] ** (equation[firstPower + 1] ** -1)
      equation.delete_at firstPower
      equation.delete_at firstPower
    end
  end
      firstExponent = equation.index('power of')
      firstPower = equation.index('root of')
end

firstTimes = equation.index('*')
firstDivide = equation.index('/')

while firstTimes != nil || firstDivide != nil
  puts 'Entering while loop'
  puts "firstTimes is #{firstTimes}"
  puts "firstDivide is #{firstDivide}"
  puts equation.join " "
  if firstTimes == nil # There is only a subtraction
    puts 'firstTimes is nil'
    equation[firstDivide - 1] = equation[firstDivide - 1 ] / equation[firstDivide + 1]
    equation.delete_at firstDivide
    equation.delete_at firstDivide
  elsif firstDivide == nil # There is only an add
    puts 'firstDivide is nil'
    equation[firstTimes - 1] = equation[firstTimes - 1 ] * equation[firstTimes + 1]
    equation.delete_at firstTimes
    equation.delete_at firstTimes
  else # There is addition and subtraction
    puts 'There is addition and subtraction'
    if firstTimes < firstDivide # Add appears first
      equation[firstTimes - 1] = equation[firstTimes - 1 ] * equation[firstTimes + 1]
      equation.delete_at firstTimes
      equation.delete_at firstTimes
    else # Subtraction appears first
      equation[firstDivide - 1] = equation[firstDivide - 1 ] / equation[firstDivide + 1]
      equation.delete_at firstDivide
      equation.delete_at firstDivide
    end
  end
  firstTimes = equation.index('*')
  firstDivide = equation.index('/')
end

firstAdd = equation.index('+')
firstSubtract = equation.index('-')

while firstAdd != nil || firstSubtract != nil
  puts 'Entering while loop'
  puts "firstAdd is #{firstAdd}"
  puts "firstSubtract is #{firstSubtract}"
  puts equation.join " "
  if firstAdd == nil # There is only a subtraction
    puts 'firstAdd is nil'
    equation[firstSubtract - 1] = equation[firstSubtract - 1 ] - equation[firstSubtract + 1]
    equation.delete_at firstSubtract
    equation.delete_at firstSubtract
  elsif firstSubtract == nil # There is only an add
    puts 'firstSubtract is nil'
    equation[firstAdd - 1] = equation[firstAdd - 1 ] + equation[firstAdd + 1]
    equation.delete_at firstAdd
    equation.delete_at firstAdd
  else # There is addition and subtraction
    puts 'There is addition and subtraction'
    if firstAdd < firstSubtract # Add appears first
      equation[firstAdd - 1] = equation[firstAdd - 1 ] + equation[firstAdd + 1]
      equation.delete_at firstAdd
      equation.delete_at firstAdd
    else # Subtraction appears first
      equation[firstSubtract - 1] = equation[firstSubtract - 1 ] - equation[firstSubtract + 1]
      equation.delete_at firstSubtract
      equation.delete_at firstSubtract
    end
  end
  firstAdd = equation.index('+')
  firstSubtract = equation.index('-')
end

# Print final equation with solution
puts solution + ' ' + equation.join

# index = 0
# operations.each do |operation|
#   puts "To calculate #{operation} please press #{index}."
#   index += 1
# end
# index = gets.chomp.to_i
# puts 'Please enter the first number.'
# num1 = gets.chomp.to_i
# while index < 6
#   if index != 5
#     puts 'Please enter the second number.'
#     num2 = gets.chomp.to_i
#   end
#   if index == 0
#     answer = num1 + num2
#   elsif index == 1
#     answer = num1 - num2
#   elsif index == 2
#     answer = num1 * num2
#   elsif index == 3
#     answer = num1 / num2
#   elsif index == 4
#     answer = num1 ** num2
#   elsif index = 5
#     answer = Math.sqrt num1
#   end
#   if index != 5
#     puts "#{num1} #{operations[index]} #{num2} = #{answer}"
#   else
#     puts "The #{operations[index]} of #{num1} = #{answer}"
#   end
#   puts "Select the next operator"
#   index = gets.chomp.to_i
#   num1 = answer
# end
