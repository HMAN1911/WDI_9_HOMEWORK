random_number = rand(10)

loop do
  puts "Guess a number between 0 to 10"
  puts "Guess number between 0 to 10 #{input = gets.chomp}"
  if input.to_i == random_number
    puts "Congratulations, your guess is correct!"
    break
  else
    puts "Guess number between 0 to 10 #{input = gets.chomp}"
  end
end
