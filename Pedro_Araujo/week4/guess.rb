
puts "Please, set the max number to be guessed:"
maxNumber = gets.chomp.to_i
number = Random.rand(0 .. maxNumber)  # create a random value

puts "Now guess a number from 0 to #{maxNumber}:"
guess = gets.chomp.to_i

while number != guess

  if number != guess
    if guess > number
      puts "Not this time! Try a lower number"
      guess = gets.chomp.to_i
    else
      puts "Not this time! Try a higher number"
      guess = gets.chomp.to_i
    end
  end
end

puts "Congratulation! You guessed the right number."
