require "pry"

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

last_value = days_of_the_week.pop

days_of_the_week.unshift(last_value)

new_days = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']]

new_days.pop

days_sorted = new_days[0].sort

puts days_sorted

# binding.pry
