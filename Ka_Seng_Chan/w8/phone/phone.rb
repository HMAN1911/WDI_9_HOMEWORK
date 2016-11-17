
class Phone
  def initialize (number)
    @number = number
  end

  def number
    number = @number.scan(/\d+/).join
    unless number.length.between?(10,11) then
      return '0000000000'
    else
      if number.length == 11 && number[0] == '1'
        return number[1..10]
      elsif number.length == 11 && number[0] != '1'
        return '0000000000'
      else
        return number
      end
    end
  end

  def area_code
    number[0..2]
  end

  def to_s
    "(#{number[0..2]}) #{number[3..5]}-#{number[6..10]}"
  end

end
