#1 Array of the Days of the Week
require "pry"

days_of_the_week = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

#2 First Day is Sunday
last_day = days_of_the_week[-1]
days_of_the_week.unshift(last_day).pop

puts days_of_the_week
#3
week = []
weekdays = []
weekend = []
weekend.push(days_of_the_week[0]).push(days_of_the_week[-1])

p weekend


temp = days_of_the_week[1..5]

weekdays.push(*temp)
p weekdays

week.push(weekdays).push(weekend)
p week

weekdays = week.shift
p weekdays

weekdays.sort!
p weekdays
