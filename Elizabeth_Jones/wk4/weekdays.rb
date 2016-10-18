##--------arrays

require 'pry'

# days_of_the_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
# change_day = days_of_the_week.pop
# days_of_the_week.unshift(change_day)
# puts days_of_the_week

#weekdays array
days_of_the_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
puts days_of_the_week
weekdays = days_of_the_week.slice(0, 5)
puts "The weekdays are: #{weekdays}"
weekends = days_of_the_week.slice(5, 7)
puts "The weekend is: #{weekends}"

days_of_the_week = "#{weekdays}, #{weekends}"
puts days_of_the_week

#remove weekends


#sort alphabetically
days_of_the_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
puts days_of_the_week.sort_by { |word| word.downcase }
