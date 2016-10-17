puts 'Enter maximum number to guess'
max = ''

loop do
  max = gets.chomp.to_i
  if max < 1
    puts 'Please enter a number of 1 or higher'
  else 
    break
  end
end

number = (rand*max).ceil

puts 'Guess the number (1-' + max.to_s + ')'

loop do
  guess = gets.chomp.to_i
  break if guess == number
  if guess > number
    puts 'Wrong, guess lower'
  else
    puts 'Wrong, guess higher'
  end
end

puts 'Correct!'

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
