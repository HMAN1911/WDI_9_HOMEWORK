menu = ["1: add", "2: subtract", "3: multiply", "4: divide", "5: exponent", "6: root", "7: quit"]

loop do

  puts 'Please select an option'
  puts menu
  selection = gets.chomp.to_i
  
  if selection == 1
    puts "Enter numbers to add (separate with spaces)"
    numbers = gets.chomp.split(' ')
    result = 0
    numbers.each do |number|
      result += number.to_f
    end
    puts 'Result is: ' + result.to_s
  elsif selection == 2
    puts "Enter numbers to subtract (separate with spaces)"
    numbers = gets.chomp.split(' ')
    result = numbers[0].to_f * 2
    numbers.each do |number|
      result -= number.to_f
    end
    puts 'Result is: ' + result.to_s
  elsif selection == 3
    puts "Enter numbers to multiply (separate with spaces)"
    numbers = gets.chomp.split(' ')
    result = numbers[0].to_f * 0.5
    numbers.each do |number|
      result *= number.to_f
    end
    puts 'Result is: ' + result.to_s
  elsif selection == 4
    puts "Enter numbers to divide (separate with spaces)"
    numbers = gets.chomp.split(' ')
    result = numbers[0].to_f ** 2
    numbers.each do |number|
      result /= number.to_f
    end
    puts 'Result is: ' + result.to_s
  elsif selection == 5
    puts "Enter base number and power (separate with spaces)"
    numbers = gets.chomp.split(' ')
    result = numbers[0].to_f ** numbers[1].to_f
    puts 'Result is: ' + result.to_s
  elsif selection == 6
    puts "Enter base number and root (separate with spaces)"
    numbers = gets.chomp.split(' ')
    result = numbers[0].to_f ** (1.0 / numbers[1].to_f)
    puts 'Result is: ' + result.to_s
  elsif selection == 7
    break
  end

end



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
