require 'pry'

input = nil
viable_choices = [1, 2, 3, 4, 5, 6, 7]
quit = false

loop do
  loop do
    puts "Pick an operation:"
    puts "1) +"
    puts "2) -"
    puts "3) /"
    puts "4) *"
    puts "5) Exp"
    puts "6) SqRoot"
    puts "7) quit"
    input = gets.chomp.to_i
    break if viable_choices.include? input
  end

  if input == 7
    puts "Goodbye"
    break
  end

  puts "You chose #{input}"
  puts "Enter numbers to operate on seperated by space"
  operands = gets.chomp.split(' ')
  answer = 0

  case input
  when 1
    operands.each_with_index do |op, i|
      answer += op.to_i
    end
  when 2
    answer = operands[0].to_i
    operands.each_with_index do |op, i|
      break if operands[i + 1].to_i == 0
      answer -= operands[i + 1].to_i
    end
  when 3
    answer = operands[0].to_f
    operands.each_with_index do |op, i|
      break if operands[i + 1].to_f == 0
      answer /= operands[i + 1].to_f
    end
  when 4
    answer = operands[0].to_i
    operands.each_with_index do |op, i|
      break if operands[i + 1].to_i == 0
      answer *= operands[i + 1].to_i
    end
  when 5
    answer = operands[0].to_i
    operands.each_with_index do |op, i|
      break if operands[i + 1].to_i == 0
      answer **= operands[i + 1].to_i
    end
  when 6
    if operands.length > 1
      puts "Can't square root more than one number. Try again"
    else
      answer = Math.sqrt(operands[0].to_i)
    end
  end
  puts "Your answer is #{answer}"
end
