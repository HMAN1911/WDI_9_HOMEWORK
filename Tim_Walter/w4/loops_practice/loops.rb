puts 'RANDOM NUMBER GUESSING GAME'
puts 'Guess a number between 0 and your max value.'
puts 'Enter a max value: '
max_value = gets.chomp.to_i

num_to_guess = rand(max_value)

loop do
  puts "Guess an number between 0 and " + max_value.to_s
  user_guess = gets.chomp.to_i
  if user_guess === num_to_guess
    puts 'CORRECT!!!!!'
    break
  end
  puts 'Incorrect guess!'
  if user_guess > num_to_guess
    puts 'TOO HIGH!'
  end
  if user_guess < num_to_guess
    puts 'TOO LOW!'
  end
end










# # Title: Guess The Number
#
# ### Activity:
# - You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.
#
# ### Specification:
# - The user should be asked to guess a number
# - If the user's guess is correct, the user should see a congratulatory message
# - If the user's guess is not correct, the user should be asked to guess the number again.
#
# ### Extensions:
# - Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# - Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"
