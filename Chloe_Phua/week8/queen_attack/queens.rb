require 'pry'
require 'byebug'
# class Queens
#   attr_accessor :white, :black
#
#   def initialize(options = {})
#     self.white = options[:white] || [0,3]
#     self.black = options[:black] || [7,3]
#
#   end
#
#   def to_s
#
#   end
#
# end

class Queens

  def initialize(options = {white: [0,3],black:[7,3]})
    if options[:white] == options[:black]
      raise ArgumentError.new("cannot occupy same space")
    end
      @white = options[:white]
      @black = options[:black]
  end

  def white()
    return @white
  end

  def black()
    return @black
  end

  def to_s

    row = ('O' * 8).split('')
    # board = Array.new
    # board = Array.new(8, row)

    # board = []
    # (0..8).each do |i|
    #   board << row
    # end
    board = []
    (0..8).each do |i|
      board << ('O' * 8).split('')
      byebug
    end

    # board = 8.times.map do row end

    # binding.pry
    #board is currently an array of arrays

    board[@white[0]][@white[1]].replace "W"
    return board

  end

end

q = Queens.new
q.to_s
