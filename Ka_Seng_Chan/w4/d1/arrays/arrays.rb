
days_of_the_week = ['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday']
p days_of_the_week

p days_of_the_week.unshift(days_of_the_week.pop)

days_of_the_week = [['Monday','Tuesday','Wednesday','Thursday', 'Friday'], ['Saturday', 'Sunday']]
p days_of_the_week

days_of_the_week.delete_at(1)
p days_of_the_week

days_of_the_week = days_of_the_week[0].sort
p days_of_the_week
