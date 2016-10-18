# Create a variable named days_of_the_week as an array
days_of_week = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

# Remove Sunday from the last postion and move it to the first position. Use array methods.
sunday = days_of_week.pop
days_of_week.unshift(sunday)

# Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
new_days_of_week = []
new_days_of_week.push([days_of_week[0], days_of_week[-1]])
new_days_of_week.push(days_of_week.slice(1, 5))

# Remove either the weekdays or the weekends
# Remove weekends
days_of_week.shift
days_of_week.pop

# Sort the remaining days alphabetically
days_of_week.sort!
