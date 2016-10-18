puts "Welcome to Guess my Number!"
puts "----------------------------"

min = nil
max = nil

puts "Enter max:"
max = gets.chomp.to_i

puts "Enter min:"
min = gets.chomp.to_i

answer = min + rand(max)
guess = nil

loop do
  puts "What's your guess?"
  guess = gets.chomp.to_i

  if guess < answer
    puts 'Wrong, guess higher'
  elsif guess > answer
    puts 'Wrong, guess lower'
  else
    puts 'Correct!'
    break
  end
end
