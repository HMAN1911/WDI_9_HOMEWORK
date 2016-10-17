# GUESS MY NUMBER
comp_choice = rand(11)

loop do
  # puts comp_choice
  puts "guess a number!"
  user_guess = gets.chomp.to_i
  if user_guess != comp_choice
    puts "Wrong number! Guess number again"
  elsif user_guess == comp_choice
    puts 'Great job! You got the number!'
    break
  end
end

# EXTENSION!

puts "please pick a max guess value"
user_max = gets.chomp.to_i
comp_choice = rand(user_max + 1)

loop do
  # puts comp_choice
  user_guess = gets.chomp.to_i
  if user_guess < comp_choice
    puts "Wrong, guess higher!"
  elsif user_guess > comp_choice
    puts "Wrong, guess lower!"
  elsif user_guess == comp_choice
    puts 'Great job! You got the right number!'
    break
  end
end
