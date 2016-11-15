require 'pry'

class Queens
  def initialize(positions={:white => [0, 3], :black => [7, 3]})
    @white_pos = positions[:white]
    @black_pos = positions[:black]
    validate_positions
    @board = draw_board
    place_queens
  end

  def validate_positions
    raise ArgumentError if (@white_pos[0] == @black_pos[0] && @white_pos[1] == @black_pos[1])
  end

  def draw_board
    board = []
    8.times do
      row = []
      8.times do
        row.push("O")
      end
      board.push(row)
    end
    board
  end

  def place_queens
    @board[@white_pos[0]][@white_pos[1]] = "W"
    @board[@black_pos[0]][@black_pos[1]] = "B"
  end


  def attack?
    check_rows_columns || check_diagonals
  end

  def check_rows_columns
    @white_pos[1] == @black_pos[1] || @white_pos[0]==@black_pos[0]
  end

  def check_diagonals
    (@white_pos[1] - @white_pos[0]).abs == (@black_pos[1] - @black_pos[0]).abs
  end

  def white
    @white_pos
  end

  def black
    @black_pos
  end

  def to_s
    output=""
    @board.each do |row|
      output<<row.join(" ")
      output<<"\n"
    end
    output.chomp
  end
end
