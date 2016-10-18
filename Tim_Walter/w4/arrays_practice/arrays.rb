
days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
p '=========== DAYS ==========='
p '=========== NEW ORDER OF DAYS ==========='
days_of_the_week.pop
days_of_the_week.unshift('Sunday')
p days_of_the_week

p '=========== WEEKDAYS ==========='
weekdays = days_of_the_week.take(6)
weekdays = weekdays.drop(1)
p weekdays

p '=========== WEEKEND ==========='
weekend = days_of_the_week.drop(6)
weekend.push days_of_the_week[0]
p weekend

p '=========== NEW ARRAY ==========='
new_array = [weekdays, weekend]
p new_array

p '=========== SORTED ==========='
sorted = days_of_the_week.sort
p sorted

# ### 1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday
#
# ### 2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.
#
# ### 3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days
#
# ### 4. Remove either the weekdays or the weekends
# Your choice...
#
# ### 5. Sort the remaining days alphabetically
