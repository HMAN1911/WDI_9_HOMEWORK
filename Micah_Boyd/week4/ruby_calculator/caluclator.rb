require 'pry'

puts "Hello, I'm a crappy terminal Calculator."
puts "I what can I do for you?"

loop do
  input1 = gets.chomp
  break if input1 == 'quit'

  input2 = gets.chomp
  break if input2 == 'quit'

  input3 = gets.chomp
  break if input3 == 'quit'


  if input2 == '-'
    puts input1.to_i - input3.to_i
  end

  if input2 == '+'
    puts input1.to_i + input3.to_i
  end

  if input2 == '*'
    puts input1.to_i * input3.to_i
  end

  if input2 == '/'
    puts input1.to_i / input3.to_i
  end

end
