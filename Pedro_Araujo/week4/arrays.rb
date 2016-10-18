days_of_the_week = ["Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"]

days_of_the_week.insert(0,days_of_the_week.delete_at(6))
allDays = [[],[]]
for i in 0..(days_of_the_week.length) -1
  if days_of_the_week[i] == "Sunday" || days_of_the_week[i] == "Saturday"
    allDays[1].push(days_of_the_week[i])
  else
    allDays[0].push(days_of_the_week[i])
  end
end

allDays.delete_at(1)
allDays[0].sort!
puts allDays
