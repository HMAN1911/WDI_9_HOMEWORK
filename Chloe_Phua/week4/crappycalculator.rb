menu = ["+","-","*","/","^","squareroot","quit"]

loop do
  puts "Menu of Operations include" + menu.to_s
  puts "What is your choice of operation?"
  user_operation = gets.chomp

  if user_operation == "quit"
    puts "bye"
    break
  elsif user_operation != "squareroot"
    puts "What is the first number that you'd like to mathify?!"
    number1 = gets.chomp.to_i
    puts "What is the second number that you'd like to mathify?!"
    number2 = gets.chomp.to_i
      case user_operation
      when "+"
        puts "Your answer is " + (number1 + number2).to_s
      when "-"
        puts "Your answer is " + (number1 - number2).to_s
      when "/"
        puts "Your answer is " + (number1/number2).to_s
      when "*"
        puts "Your answer is " + (number1*number2).to_s
      when "^"
        puts "Your answer is " + (number1**number2).to_s
      end
  elsif user_operation == "squareroot"
    puts "What is the first number that you'd like to mathify?!"
    number1 = gets.chomp.to_i
    puts "Your answer is " + (Math.sqrt(number1)).to_s
  end
end
