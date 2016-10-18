puts "Crappy Calculator"
puts "--------------------"

loop do
  puts "Options"
  puts "1) Addition"
  puts "2) Subtraction"
  puts "3) Multiplication"
  puts "4) Division"
  puts "5) Exponent"
  puts "6) Square root"
  puts "X) Exit"
  puts "--------------------"
  puts "Choose an option: "

  input = gets.strip
  case input
    when "1"
      puts "Addition"
      puts "Enter two operands"
      a = gets.to_f
      b = gets.to_f
      puts "#{a} + #{b} = #{a + b}"
    when "2"
      puts "Subtraction"
      puts "Enter two operands"
      a = gets.to_f
      b = gets.to_f
      puts "#{a} - #{b} = #{a - b}"
    when "3"
      puts "Multiplication"
      puts "Enter two operands"
      a = gets.to_f
      b = gets.to_f
      puts "#{a} x #{b} = #{a * b}"
    when "4"
      puts "Division"
      puts "Enter two operands"
      a = gets.to_f
      b = gets.to_f
      puts "#{a} / #{b} = #{a / b}"
    when "5"
      puts "Exponent"
      puts "Enter two operands"
      a = gets.to_f
      b = gets.to_f
      puts "#{a} ^ #{b} = #{a ** b}"
    when "6"
      puts "Square root"
      puts "Enter number"
      a = gets.to_f
      puts "Square root of #{a} = #{Math.sqrt(a)}"
    when "X"
      break
    else
      puts "Invalid choice"
  end
  puts ""
end

puts "Bye"
