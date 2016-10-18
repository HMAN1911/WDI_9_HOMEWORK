require 'pry'

# first part
# use begin end block

# begin
#   number = rand(10)
#   question = 'guess the number between 0 and 10?'
#   puts question
#   guess = gets.chomp.to_i
# end while number != guess
#   puts 'You guessed the right number ' + number.to_s


# extension

question1 = 'choose a number between 0 and 10000'
puts question1
max_num = gets.chomp.to_i
number = rand(max_num)

question2 = "guess the number between 0 and #{max_num}?"
puts question2

begin
  guess = gets.chomp.to_i

  if guess < max_num
    puts 'Wrong, guess higher!'
  elsif guess > max_num
    puts 'Wrong, guess lower!'
  end

end while number != guess
  puts 'You guessed the right number ' + number.to_s




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
