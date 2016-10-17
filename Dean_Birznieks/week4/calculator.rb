require 'pry'
require 'fileutils'

# Calculator
#
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
#
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)


#  *** REFER BELOW THE ANSWER TO PHASE 3 FOR A SEPARATE COMMENTED OUT SOLUTION FOR PHASES 1 & 2  ***

# Phase 3
#
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
#
# Optional Extensions
#
# Does your calculator allow addition of more then 2 numbers in one go? eg: 2 + 3 + 4


loop do
  puts ' '  # extra line for clarity
  puts 'Enter the number that matches the required calculator function from the menu below'
  puts 'for example - enter 1 to add numbers or 3 to multiply them.'
  puts ' '  # extra line for clarity
  puts 'CALCULATOR FUNCTION MENU'
  puts '========================'
  puts '1.  Add   2.  Subtract    3.  Multiply   4.  Divide'
  puts '5.  Square Root  (e.g. - the square root of 9 is 3)'
  puts '6.  Exponent     (number of times a number is multiplied by itself)'
  puts '99. To Exit the Calculator'
  puts ' '  # extra line for clarity
  operator = gets.chomp.to_i
  if operator == 99
    puts 'Exiting the program at the request of the user.'
    break
  end

  if  operator == 1    # add
    puts "What's the first number to add?"
    first_input_add = gets.chomp.to_i
    puts "and the next...?"
    second_input_add = gets.chomp.to_i
    puts "If you want to add a third, enter it now - or if two's enough, just enter a 0"
    third_input_add = gets.chomp.to_i
      if third_input_add == 0
        puts "#{first_input_add} + #{second_input_add} = #{first_input_add + second_input_add}"
      else
        puts "#{first_input_add} + #{second_input_add} + #{third_input_add} = #{first_input_add + second_input_add + third_input_add}"
      end


  elsif operator == 2  # subtract
    puts "What's the number you'd like to subtract from?"
    first_input_subtract = gets.chomp.to_i
    puts "and the number you want to subtract?"
    second_input_subtract = gets.chomp.to_i
    puts "If you want to subtract a third, enter it now - or if two's enough, just enter a 0"
    third_input_subtract = gets.chomp.to_i
      if third_input_subtract == 0
        puts "#{first_input_subtract} - #{second_input_subtract} = #{first_input_subtract - second_input_subtract}"
      else
        puts "#{first_input_subtract} - #{second_input_subtract} - #{third_input_subtract} = #{first_input_subtract - second_input_subtract - third_input_subtract}"
      end

  elsif operator == 3  # multiply
    puts "What's the first number to multiply?"
    first_input_multiply = gets.chomp.to_i
    puts "and the second?"
    second_input_multiply = gets.chomp.to_i
    puts "If you want to multiply a third number, enter it now - or just enter a 1"
    third_input_multiply = gets.chomp.to_i
      if third_input_multiply == 1
        puts "#{first_input_multiply} x #{second_input_multiply} = #{first_input_multiply * second_input_multiply}"
      else
        puts "#{first_input_multiply} x #{second_input_multiply} x #{third_input_multiply} = #{first_input_multiply * second_input_multiply * third_input_multiply}"
      end

  elsif operator == 4  # divide
    puts "What's the first number to divide?"
    first_input_divide = gets.chomp.to_f
    puts "and the second?"
    second_input_divide = gets.chomp.to_f
    puts "If you want to divide that number by another, enter it now - or just enter a 1"
    third_input_divide = gets.chomp.to_f
      if third_input_divide == 1.0
        puts "#{first_input_divide} divided by #{second_input_divide} = #{first_input_divide / second_input_divide}"
      else
        puts "#{first_input_divide} divided by #{second_input_divide} and then divided by #{third_input_divide} = #{first_input_divide / second_input_divide / third_input_divide}"
      end


  elsif operator == 6   # exponent
    puts "What's the base number you'd like to use?"
    first_input_exp = gets.chomp.to_i
    puts "and the exponent you'd like to you use?"
    second_input_exp = gets.chomp.to_i
    puts "#{first_input_exp} with an exponent of #{second_input_exp} = #{first_input_exp**second_input_exp}"


  elsif operator == 5        # square root
      puts "Please enter the number you would like the square root of."
      first_input_sqrt = gets.chomp.to_f
      puts "The square root of #{first_input_sqrt} = #{Math.sqrt(first_input_sqrt)}"
  end

    puts ' '   # extra line for clarity
    puts 'To continue enter y or q to quit'
    puts ' '   # extra line for clarity
    continue = gets.chomp
    if continue == 'q'
      puts 'Exiting the program at the request of the user.'
      break
    end
end





#  *** SEE BELOW FOR A SEPARATE COMMENTED OUT SOLUTION FOR PHASES 1 & 2  ***


# loop do
#   puts 'Please enter the type of operator for your calculation from the list below'
#   puts '+'
#   puts '-'
#   puts '*'
#   puts '/'
#   puts 'square root  (for example - the square root of 9 is 3)'
#   puts 'exponent     (meaning number of times a number is multiplied by itself)'
#   puts "Or just enter q to quit"
#   operator = gets.chomp
#   if operator == 'q'
#     break
#   end
#   puts "Please enter the first number you would like to use."
#   first_input = gets.chomp.to_i
#   if operator == 'square root'
#     puts "The #{operator} of #{first_input} = #{Math.sqrt(first_input)}"
#     break
#   end
#     puts "Please enter the other number you would like to use."
#     second_input = gets.chomp.to_i
#   if operator == 'add'
#     puts "#{first_input} #{operator} #{second_input} = #{first_input + second_input}"
#   elsif operator == '-'
#     puts "#{first_input} #{operator} #{second_input} = #{first_input - second_input}"
#   elsif operator == '*'
#     puts "#{first_input} #{operator} #{second_input} = #{first_input * second_input}"
#   elsif operator == '/'
#     puts "#{first_input} #{operator} #{second_input} = #{first_input / second_input}"
#   elsif operator == 'exponent'
#     puts "#{first_input} with an exponent of #{second_input} = #{first_input**second_input}"
#   end
#   puts 'To continue enter y or q to quit'
#   continue = gets.chomp
#   if continue == 'q'
#     break
#   end
# end
