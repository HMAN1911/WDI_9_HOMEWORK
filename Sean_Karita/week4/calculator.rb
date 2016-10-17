require "pry"

puts "Select 'a' for addition, 's' for subtraction, 'm' for multiplication or 'd' for division"

puts "Select 'a' for addition, 's' for subtraction, 'm' for multiplication or 'd' for division #{operator = gets.chomp}"

puts "enter your first number"
puts "enter your first number #{number_one= gets.chomp}"

puts "enter your second number"
puts "enter your second number#{number_two= gets.chomp}"

if operator == 'a'
  number_one + number_two
