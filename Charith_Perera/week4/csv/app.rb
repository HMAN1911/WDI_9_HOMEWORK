require 'sinatra'
require 'sinatra/reloader'
# require 'CSV'
require 'pry'

get '/' do
  # @leads = {}
  # csv_arr = CSV.read("leads.csv")
  # csv_arr.shift
  # csv_arr.each do |row|
  #   @leads[row[0]] = row[2]
  # end
  # binding.pry

  @leads = {}
  csv_all_lines = File.read("leads.csv").split("\r\n")
  header_row = csv_all_lines.shift.split(",")
  contact_name_index = header_row.index("Lead")
  contact_number_index = header_row.index("Phone")
  csv_all_lines.each do |line|
    line_array = line.split(",")
    @leads[line_array[contact_name_index]] = line_array[contact_number_index]
  end
  erb :index
end
