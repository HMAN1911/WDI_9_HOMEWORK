class Phone
  def initialize num
    @number = clean num
    if @number.length < 10
      @number = "0000000000"
    elsif @number.length == 11 && @number[0] == "1"
      @number = @number.slice(1, 10)
    elsif @number.length > 10
      @number = "0000000000"
    end
  end
  def clean number
    cleaned = number.gsub(/[^0-9]/, "")
    return cleaned
  end
  def number
    @number
  end
  def area_code
    return number.slice(0, 3)
  end
  def to_s
    return "(#{area_code}) #{number.slice(3, 3)}-#{number.slice(6, 4)}"
# assert_equal "(123) 456-7890", number.to_s
  end
end
