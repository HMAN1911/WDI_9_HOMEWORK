# 1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
# 2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.
# 3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends
#
# Your choice...
#
# 5. Sort the remaining days alphabetically


require "pry"
require "byebug"
dotw=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
p dotw
# binding.pry
dotw.pop
p dotw
dotw.unshift('Sunday')
p dotw
puts ""
weekdays = dotw - ['Sunday','Saturday']
weekends = dotw - weekdays
p weekdays
puts " "
p weekends
p weekdays.sort
