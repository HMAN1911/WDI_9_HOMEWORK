
days_of_the_week = ['Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday']

days_of_the_week.insert(0, days_of_the_week.pop)
# p days_of_the_week
week = [ [days_of_the_week.pop, days_of_the_week.shift], days_of_the_week ]
# p week
alpha_week = week[1].sort
p alpha_week
