# Title: Guess The Number
#
# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
#
#
# First Part
# rand = 1..10
# puts "Guess a number between 1 and 10"
# guess = gets.chomp.to_i
# until guess == number
#   puts "Please guess again."
#   guess = gets.chomp.to_i
# end
# puts "Congratulations - that's correct!"


# Second Part

puts "Choose the maximim value for a guessing game"
max_num = gets.chomp.to_i
number = rand 1..max_num
puts "Thanks, now guess a number between 1 and #{max_num}."
loop do
  guess = gets.chomp.to_i
  if guess == number
    puts "Congratulations - that's correct!"
    break
  elsif guess < number
    puts "Wrong - guess higher."
  elsif guess > number
    puts "Wrong - guess lower."
  end
end
