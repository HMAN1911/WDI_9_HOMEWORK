require 'pry'

def welcome
  puts "Please enter your name: "
  name = gets
  puts = "Hi #{name} I am a crappy caluclator - you can add subtract, divide, multiply, subtract"
end

welcome

def calculation
puts "Crappy Calculator - Type 1 to add, Type 2 to subtract, Type 3 to divide, Type 4 to multiply"
  user_choice = gets.to_i
  if user_choice == 1
    user_choice = "add"
  elsif user_choice == 2
      user_choice = "subtact"
  elsif user_choice == 3
      user_choice = "divide"
  elsif user_choice == 4
        user_choice = "multiply"
  end
end

calculation



# loop do
#   print "Guess a random number between 1 and #{max}"
#   guess = gets.to_i
#   if guess == number
#     puts "Yes the number is #{guess}"
#   elsif guess > number
#     puts "too high!"
#   elsif guess < number
#     puts "too low!"
#   end
# end
