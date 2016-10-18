# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

p days_of_the_week

# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

day = days_of_the_week.pop
days_of_the_week.unshift day

p days_of_the_week

# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

days_of_the_week_grouped = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday']]

p days_of_the_week_grouped

# 4. Remove either the weekdays or the weekends
# Your choice...

days_of_the_week_grouped.pop

p days_of_the_week_grouped

# 5. Sort the remaining days alphabetically
days_of_the_week_grouped[0].sort!

p days_of_the_week_grouped
