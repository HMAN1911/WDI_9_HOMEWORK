require 'pry'
class Coffee

  @@instance_collector = []

  def initialize(type, sugar, strength, name)
    @type = type
    @sugar = sugar
    @strength = strength
    @name = name.gsub(/D/, 'B').gsub(/T/, 'F').gsub(/P/, 'D')
    @waiting = rand(2..5).to_s + "minutes"
    @extras = []
    @collected = false
    @@instance_collector << self
  end

  def self.uncollected
    @@instance_collector.select do |coffee|
      coffee.collected? == false
    end
  end

  def get_type
    @type
  end

  def get_sugar
    @sugar
  end

  def get_strength
    @strength
  end

  def get_name
    @name
  end

  def to_s
    @string = "#{@name}'s #{@type}, #{@strength}, #{@sugar}"
  end

  def ready?
    return @string.upcase
  end

  def waiting_time
    @waiting
  end

  def collected?
      return @collected
  end

  def collected=(collected)
    @collected = collected
  end

  def add_extra(extra)
    @extras.push(extra)
  end

end

c1 = Coffee.new('latte', '2 sugars', 'medium', 'Darryl')
c2 = Coffee.new('cappuccino', '1 sugar', 'dark', 'Drew')
c3 = Coffee.new('espresso', '1 sugar', 'very dark', 'Phil')
c4 = Coffee.new('flat white', '3 sugars', 'light', 'Terry')

binding.pry
