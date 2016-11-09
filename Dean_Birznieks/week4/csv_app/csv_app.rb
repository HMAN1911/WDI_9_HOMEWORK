require "pry"
require "csv"
require "sinatra"


def csv_import
  @leads = CSV.read('leads.csv')
end

def display_csv_array
  csv_import
end



binding.pry
