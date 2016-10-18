
puts 'guess my number game'

print 'enter the maximum value: '
max_value = gets.to_i
random_number = rand(max_value + 1)

print "guess a number between 0 to #{max_value}: "
guess = gets.chomp.to_i
while guess != random_number
  # print 'Incorrect. Have another guess: '
  if guess > random_number
    print 'Wrong! Guess lower: '
  elsif guess < random_number
    print 'Wrong! Guess higher: '
  end
  guess = gets.chomp.to_i
end
puts 'Correct! Congratulations!'
