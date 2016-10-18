def add
  puts 'Enter numbers to add separated by commas'
  # get user input as an array of strings
  num = gets.chomp.to_s
  # use map method to run block for each element and convert to number
  num = num.split(',').map { |s| s.to_i }
  # to add all numbers - this is cool, can also use reduce method
  # reduce is an alias for inject - idiomatic code, select method based on intention
  puts "The total is #{num.inject(:+)}"
end

def subtract
  puts 'Enter the first number'
  num1 = gets.chomp.to_i
  puts 'Enter the second number to subtract'
  num2 = gets.chomp.to_i
  puts "#{num1} - #{num2} = #{num1 - num2}"
end

def multiply
  puts 'Enter the first number'
  num1 = gets.chomp.to_i
  puts 'Enter the second number to multiply'
  num2 = gets.chomp.to_i
  puts "#{num1} * #{num2} = #{num1 * num2}"
end

def divide
  puts 'Enter the first number'
  num1 = gets.chomp.to_i
  puts 'Enter the second number'
  num2 = gets.chomp.to_i
  puts "#{num1} / #{num2} = #{num1 / num2}"
end

def exponents
  puts 'Enter the base number'
  num1 = gets.chomp.to_i
  puts 'Enter the exponent'
  num2 = gets.chomp.to_i
  puts "#{num1} to the power of #{num2} = #{num1 ** num2}"
end

def square_root
  puts 'Enter a number'
  num = gets.chomp.to_i
  num_square_root = Math.sqrt(num)
  if num_square_root % 2 == 0
    num_square_root = Math.sqrt(num).round
  elsif num_square_root % 2 != 0
    num_square_root = Math.sqrt(num).round(4)
  end
  puts "The square root of #{num} = " + num_square_root.to_s
end


# program start
puts 'Welcome to low-fi calculator.'

begin
  puts "The functions available are:
  addition: enter '+'
  subtraction: enter '-'
  multiplication: enter '*'
  division: enter '/'
  exponents: enter 'ex'
  square root: enter 'sq'
  quit: enter 'q'"
  user_request = gets.chomp.to_s

  if user_request == '+'
    add
  end

  if user_request == '-'
    subtract
  end

  if user_request == '*'
    multiply
  end

  if user_request == '/'
    divide
  end

  if user_request == 'ex'
    exponents
  end

  if user_request == 'sq'
    square_root
  end

  if user_request == 'q'
    abort "Thanks for using low-fi calculator.
    Goodbye and Good Luck!"
  end

end while user_request != 'q'



# ##### Phase 1
# - Calculator functionality
#   - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# ##### Phase 2
# - Advanced Calculator functionality
#   - Calculator should be able to do basic arithmetic (exponents, square roots)
#
# ##### Phase 3
# - User should be given a menu of Calculator functionality
# - User should be able to choose intended functionality
#
# ### Optional Extensions
# - Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4
