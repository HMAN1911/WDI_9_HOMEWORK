
class Queens
  def initialize (hash = {white: [0,3], black: [7,3]})
    if hash[:white] == hash[:black]
      raise ArgumentError.new('cannot occupy same space')
    end
    @white = hash[:white]
    @black = hash[:black]
    @block = 8.times.map { 8.times.map { 'O' } }
    @block[@white[0]][@white[1]] = 'W'
    @block[@black[0]][@black[1]] = 'B'
  end

  def white
    @white
  end

  def black
    @black
  end

  def to_s
    @block.map { |row| row.join(' ') }.join("\n")
  end

  def attack?
    return @white[0] == @black[0] || @white[1] == @black[1] || (@white[0] - @black[0]).abs == (@white[1] - @black[1]).abs
  end
end
