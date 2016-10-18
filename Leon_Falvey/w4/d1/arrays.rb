days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

puts days_of_the_week.to_s

days_of_the_week.unshift(days_of_the_week.pop)

puts days_of_the_week.to_s

days_of_week = [[],[]]

days_of_the_week.each do |day|
  if day[0] == 'S'
    days_of_week[1].unshift(day)
  else
    days_of_week[0].push(day)
  end
end

puts days_of_week.to_s

days_of_week.pop

puts days_of_week.to_s

def sort(arr)
  temp = arr

  for i in 0...temp.length
    min = i
    for j in i+1...temp.length
      if temp[j] < temp[min]
        min = j
      end
    end
    t = temp[i]
    temp[i] = temp[min]
    temp[min] = t
  end
  return temp
end

days_of_week[0] = sort(days_of_week[0])

puts days_of_week.to_s
