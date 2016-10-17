# Implement a basic number guessing game
# Min and max bounds as defined by spec
MIN_VALUE = 0
MAX_VALUE = 10000

# Fetch min and max values for random number
puts "Guess my number!"
puts "Enter min number: "
min = MIN_VALUE - 1
while min < MIN_VALUE
  min = gets.to_i
  if min < MIN_VALUE
    puts "Minimum must be equal to or greater than #{MIN_VALUE}"
  end
end

puts "Enter max number: "
max = MAX_VALUE + 1
while max > MAX_VALUE
  max = gets.to_i
  if max > MAX_VALUE
    puts "Maximum must be equal to or less #{MAX_VALUE} "
  elsif max <= min
    puts "Maximum must be higher than #{min}"
    max = MAX_VALUE + 1
  end
end

# Generate number between input range
number = Random.rand(max - min) + min
input = ''

puts "Pick a number between #{min} and #{max}"

while input != number
  input = gets.to_i

  if input < number
    puts "Wrong, guess higher!"
  elsif input > number
    puts "Wrong, guess lower!"
  end
end

puts "Correct!"
