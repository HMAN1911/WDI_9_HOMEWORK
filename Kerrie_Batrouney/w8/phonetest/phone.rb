require 'pry'

class Phone

def initialize (num)
 @num = num
 clean_number
end

def clean_number
@num = @num.gsub(/[() -.]/, "")
end

def number
@num
  if @num.length < 10
    return "0000000000"
  elsif @num.length == 11
    if @num[0] == "1"
      @num = @num.slice(1,10)
      return @num
    end
    return "0000000000"
  elsif @num.length>11
    return "0000000000"
  elsif @num.length == 10
    return @num
  end
end

def area_code
code = @num.slice(0,3)
return code
end

def to_s
return "("+@num.slice(0,3)+") "+@num.slice(3,3)+"-"+@num.slice(6,4)
 end

end

# # binding.pry
