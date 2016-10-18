require 'pry'

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

puts days_of_the_week.rotate(days_of_the_week.length-1)

week_days = [days_of_the_week[0..4]] + [days_of_the_week[5..6]]

week_days.delete(week_days[1])

week_days = week_days[0].sort

binding.pry
