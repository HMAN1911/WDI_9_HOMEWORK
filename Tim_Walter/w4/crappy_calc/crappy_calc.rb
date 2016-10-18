p 'CRAPPY CALCULATOR'
p '-----------------'
p 'Enter 2 numbers and and operand. . q to quit'

loop do
  p 'Enter 1st Number:'
  first_num = gets.chomp
  if first_num === 'q'
    break
  end

  p 'Enter operand: (+ - / x )'
  operand = gets.chomp
  if operand === 'q'
    break
  end

  p 'Enter 2nd number:'
  second_num = gets.chomp
  if second_num === 'q'
    break
  end

  first_num = first_num.to_i
  second_num = second_num.to_i
  if operand === '+'
    answer = first_num + second_num
  elsif operand === '-'
    answer = first_num - second_num
  elsif operand === '/'
    answer = first_num / second_num
  elsif operand === 'x' || operand === '*'  || operand === 'X'
    answer= first_num * second_num
  else answer = 'Im having trouble with that one. Sorry'
  end
  p "Answer is " + answer.to_s

end







#
#
#
#
# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
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
