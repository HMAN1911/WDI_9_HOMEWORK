require 'pry'


 week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

 # puts week.rotate(week.length-1)

weekdays = week[0..4]
weekend = week[5..6]
full_week = [weekdays, weekend]

remaining_days = full_week.delete(full_week[0])

p remaining_days.sort

binding.pry
