require 'pry'


puts 'Press 5 anytime to quit'
puts 'What would you like to do'

options = ['1. Addition', '2. Subtraction', '3. Multiplication', '4. Division']
puts options

puts 'Enter the number that corresponds with your desired calculator function'

calculator_function = gets.chomp.to_i

until calculator_function == 5

  if calculator_function == 1
    puts 'Enter the numbers you would like to add'
    puts 'Enter number 1: '
    number1 = gets.chomp.to_i
    puts 'Enter number 2: '
    number2 = gets.chomp.to_i
    puts number1 + number2
  end

  if calculator_function == 2
    puts 'Enter the numbers you would like to substract'
    puts 'Enter number 1: '
    number1 = gets.chomp.to_i
    puts 'Enter number 2: '
    number2 = gets.chomp.to_i
    puts number1 - number2
  end

  if calculator_function == 3
    puts 'Enter the numbers you would like to multiply'
    puts 'Enter number 1: '
    number1 = gets.chomp.to_i
    puts 'Enter number 2: '
    number2 = gets.chomp.to_i
    puts number1 * number2
  end

  if calculator_function == 4
    puts 'Enter the numbers you would like to divide'
    puts 'Enter number 1: '
    number1 = gets.chomp.to_i
    puts 'Enter number 2: '
    number2 = gets.chomp.to_i
    puts number1 / number2
  end

  puts 'Would you like to use the calculator again?'
  calculator_function = gets.chomp.to_i

  if calculator_function != 5
    puts options
  end

end
