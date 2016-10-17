
option = 0

while option != '9'
  puts 'Calculator - Operations Menu'
  puts '1: +'
  puts '2: -'
  puts '3: *'
  puts '4: /'
  puts '5: exponents'
  puts '6: sqrt'
  puts '9: quit'

  print 'Enter option number: '
  option = gets.chomp

  case option
  when '1'
    print 'enter the first number: '
    number1 = gets.chomp.to_i

    print 'enter the second number: '
    number2 = gets.chomp.to_i
    puts "#{number1} + #{number2} = #{number1 + number2}"

  when '2'
    print 'enter the first number: '
    number1 = gets.chomp.to_i

    print 'enter the second number: '
    number2 = gets.chomp.to_i
    puts "#{number1} - #{number2} = #{number1 - number2}"

  when '3'
    print 'enter the first number: '
    number1 = gets.chomp.to_i

    print 'enter the second number: '
    number2 = gets.chomp.to_i
    puts "#{number1} * #{number2} = #{number1 * number2}"

  when '4'
    print 'enter the first number: '
    number1 = gets.chomp.to_i

    print 'enter the second number: '
    number2 = gets.chomp.to_i
    puts "#{number1} / #{number2} = #{number1 / number2.to_f}"

  when '5'
    print 'enter the first number: '
    number1 = gets.chomp.to_i

    print 'enter the second number: '
    number2 = gets.chomp.to_i
    puts "#{number1} ** #{number2} = #{number1 ** number2}"

  when '6'
    print 'enter number: '
    number = gets.chomp.to_i
    puts "sqrt(#{number}) = #{Math.sqrt(number)}"

  when '9'
    puts 'quitting'

  else
    puts 'Invalid option'
  end

end
