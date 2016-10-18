puts 'Enter a maximum number so the computer can create a random number'
max = gets.chomp.to_i

comp_num = Random.rand(max)

loop do
  puts 'Guess a number you crappy failure of a human.'
  guess = gets.chomp.to_i
  break if guess == comp_num
  puts 'You failed. No surprises there'
  if guess > comp_num
    puts 'Aim a little bit lower, will ya?'
  else
    puts 'Maybe try a higher number. Big numbers aren\'t that scary.'
  end
end
puts 'Well done for getting out of this hell hole.'
