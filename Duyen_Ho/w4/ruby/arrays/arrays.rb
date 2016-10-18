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
puts "Days of the week: #{days_of_the_week}"


# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# Answer 1:
# gregorian_week = days_of_the_week.unshift(days_of_the_week[-1]).slice(0, 7)
# unshift adds new item to orginal array, slice returns new array
# this combination of method chaining means the original is mutated

# Answer 2:
sunday = days_of_the_week[-1]
gregorian_week = days_of_the_week.slice(0, 6).unshift(sunday)
puts "Gregorian week: #{gregorian_week}"


# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days

split_week = []
split_week.push(days_of_the_week.slice(0, 5)).push(days_of_the_week.slice(-2, 2))
puts "Split week: #{split_week}"
# => [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Saturday", "Sunday"]]

# 4. Remove either the weekdays or the weekends

weekdays = split_week.shift
puts "Weekdays: #{weekdays}"
# => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

weekends = split_week.pop
puts "Weekends: #{weekends}"
# => ["Saturday", "Sunday"]


# Your choice...

# 5. Sort the remaining days alphabetically

weekday_sort = weekdays.join(' ').split(' ').sort
puts "Weekdays alphabetised: #{weekday_sort}"
# => ["Friday", "Monday", "Thursday", "Tuesday", "Wednesday"]

weekend_sort = weekends.join(' ').split(' ').sort
puts "Weekends alphabetised: #{weekend_sort}"
# => ["Saturday", "Sunday"]


# REF: also
# array.sort_by { |word| word.downcase }
# http://stackoverflow.com/questions/17799871/how-do-i-alphabetize-an-array-ignoring-case
