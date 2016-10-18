require "pry"

puts "Select '+' for addition, '-' for subtraction, '*' for multiplication or '/' for division"

puts "Select '+' for addition, '-' for subtraction, '*' for multiplication or '/' for division #{operator = gets.chomp}"

puts "enter your first number"
puts "enter your first number #{number_one= gets.chomp}"

puts "enter your second number"
puts "enter your second number#{number_two= gets.chomp}"

if operator == 'a'
  number_one + number_two
end

if 
