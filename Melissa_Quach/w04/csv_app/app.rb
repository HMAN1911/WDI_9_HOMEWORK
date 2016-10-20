require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  # Load and parse CSV contents
  @leads = []
  file = open("leads.csv")
  lines = file.read.split("\n")
  # Remove headings
  lines.shift
  # Parse records
  lines.each do |line|
    lead = line.split(",")
    binding.pry
    @leads.push({
      :name => lead[0],
      :phone_no => lead[1]
    })
  end

  file.close
  erb :index
end

# binding.pry
