require 'pry'
puts 'Pick a number between 1-10.'

guess = gets.chomp.to_i
random = rand(10).to_i

loop do

  if guess > random
    puts 'Too high. Guess again.'
  end

  if guess < random
    puts 'Too low. Guess again.'
  end

  if guess == random
    puts 'You guessed it!'
  end

  break if guess == random

  guess = gets.chomp.to_i

end

# binding.pry
