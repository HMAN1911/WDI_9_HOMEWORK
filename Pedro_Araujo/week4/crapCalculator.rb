require 'pry'

sign = ''
num1 = ''
num2 = ''

def show_menu
  puts "Menu Options:"
  puts "[ *  --> (Multiplication) ]"
  puts "[ / --> (Division) ]"
  puts "[ + --> (Addition) ]"
  puts "[ - --> (Subtraction) ]"
  puts "[ ** --> (Exponential) ]"
  puts "[ sqr --> (Square Root) ]"
end

loop do
  system("clear")
  loop do
    puts "\nEnter the first number:"
    num1 = gets.chomp.to_f
    break if num1.is_a? Numeric
    puts "Invalid entry! You have to enter a number. Try again:"
    num1 = gets.chomp.to_f
  end


  loop do
    puts "\nEnter the Operation you want to perform: ('menu' for menu options)"
    sign = gets.chomp
    if sign == 'menu'
      show_menu()
      sign = gets.chomp
    end
    break if (sign == '*') || (sign == '/') || (sign == '+') || (sign == '-') || (sign == 'menu') || (sign == '**') || (sign == 'sqr') || (sign == 'quit')
    puts 'ERROR - Invalid Operation.'
  end

  if sign != 'sqr'
    loop do
      puts "\nEnter the second number:"
      num2 = gets.chomp.to_f
      break if num2.is_a? Numeric
      puts "Invalid entry! You have to enter a number. Try again:"
      num2 = gets.chomp.to_f
    end
  end



  case sign
    when '*'
      puts "\nResult: #{num1 * num2}"
    when '/'
      puts "\nResult: #{num1 / num2}"
    when '+'
      puts "\nResult: #{num1 + num2}"
    when '-'
      puts "\nResult: #{num1 - num2}"
    when '**'
      puts "\nResult: #{num1 ** num2}"
    when 'sqr'
      puts "\nResult: #{Math.sqrt(num1)}"
  end
  puts "\n\n Would you like to use calculator again? (y,n)"
  answer = gets.chomp

  break if answer == 'n'

end
system('clear')
puts "Calculator turned OFF"
