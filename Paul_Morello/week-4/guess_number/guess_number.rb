require 'pry'

puts 'Select a number from 1 up to 1000'

random_user_number = gets.chomp.to_i

binding.pry

puts 'Pick a number between 1 and ' + random_user_number.to_s

random_number = 1 + rand(random_user_number)
user = gets.chomp.to_i

loop do

  if random_number > user
    puts 'Wrong, guess higher.'
  end

  if random_number < user
    puts 'Wrong, guess lower.'
  end

  if random_number == user
    puts 'Congratulations, you guessed correctly!'
  end

  break if random_number == user

  user = gets.chomp.to_i

end

binding.pry
