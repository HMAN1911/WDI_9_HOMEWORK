puts "\nHi there, you would like to guess between 0 and ?\n"
puts "Input maximum value:"

def get_number(max)
  loop do
    input = gets.chomp
    input_int = input.to_i
    checkAlpha = input.gsub(/[0-9]/, '')
    
    if checkAlpha == "" && input_int != 0 && 
                     (input_int <= max || max == 0)
      return input_int
    end
    puts "Input appropriate number:"
  end
end

max_number = get_number(0)
guess_number = rand(max_number + 1)
puts "\nGuess the number I have chosen:\n"
chosen_number = 0;
while chosen_number != guess_number
  chosen_number = get_number(max_number)
  if chosen_number < guess_number
    puts "Wrong, guess higher!"
  elsif chosen_number > guess_number
    puts "Wrong, guess lower!"
  end
end

puts "Yes you guessed correctly!\n"



