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



puts "Choose you maximum value"
userMax = gets.to_i

ranNum = rand(1..userMax)

loop do
  puts "guess a number between 1 and #{userMax}"
  userNum = gets.to_i
  if userNum === ranNum
    puts 'Congrats you guessed the right number'
  break
  elsif userNum > ranNum
    puts 'WRONG, guess lower!'
  elsif userNum < ranNum
    puts 'WRONG, guess higher!'
  end
end
