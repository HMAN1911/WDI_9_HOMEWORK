# Title: Guess The Number
# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

# Get the number from the player
puts 'You are about to play the number guessing game. Please enter a maximum value.'
max_number = gets.chomp.to_i
# Generate the random number
random_number = rand(max_number)
# Ask for the player guess
puts "I am thinking of a number between 0 and #{max_number}. What is it?"
player_guess = gets.chomp.to_i
guesses = 1
# Check if player guess is correct
while player_guess != random_number
  guesses += 1
  if player_guess > random_number
    puts 'That guess was too high. Guess again.'
    player_guess = gets.chomp.to_i
  else
    puts 'That guess was too low. Guess again.'
    player_guess = gets.chomp.to_i
  end
end
puts "That's right! The correct number was #{random_number}. You guessed in #{guesses} tries."
