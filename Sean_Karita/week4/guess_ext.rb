require "pry"

puts "Choose a number between 0 and your choice"
puts "Choose a number between 0 and your choice #{input = gets.chomp}"
top_range = input.to_i
number = rand(top_range)

# binding.pry

loop do
  puts "What is your guess?"
  guess = gets.chomp.to_i
  unless guess == number
    message = if guess > number
      "Wrong, guess lower!"
    else
      "Wrong, guess higher!"
    end
    puts message
  else
    puts "You guessed right!"
    break
  end
end
