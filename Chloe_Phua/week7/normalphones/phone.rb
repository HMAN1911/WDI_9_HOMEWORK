class Phone

  def initialize(potatoes)
    @unclean = potatoes
    number();
  end

  def reformatted
    @reformatted
  end

  def number()
    @reformatted = @unclean.gsub(/[[:punct:]]/,'').gsub(' ','')
    if @reformatted.length < 10
      return "0000000000"
    elsif @reformatted.length == 10
      return @reformatted
    elsif @reformatted.length == 11 && @reformatted[0] == '1'
      cutfirst = @reformatted[1..-1]
      return cutfirst
    elsif @reformatted.length == 11 && @reformatted[0] != '1'
      return "0000000000"
    elsif @reformatted.length > 11
      return "0000000000"
    end
  end

  def area_code
    @code = @reformatted[0,3]
    return @code
  end

  def to_s
    area_code();

    phrase = "(" + @code + ")" + " " + @reformatted[3..5] + "-" + @reformatted[6..9]
    return phrase
  end

end
