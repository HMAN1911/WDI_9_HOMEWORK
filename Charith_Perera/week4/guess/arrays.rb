days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# p days_of_the_week
days_of_the_week.unshift(days_of_the_week.pop)
# p days_of_the_week

more_days_of_the_week = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Saturday", "Sunday"]]

# p more_days_of_the_week
more_days_of_the_week.pop
# p more_days_of_the_week
more_days_of_the_week[0].sort!
p more_days_of_the_week
