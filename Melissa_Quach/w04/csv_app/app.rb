require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'csv'

get '/' do
  # Load and parse CSV contents
  @leads = []
  CSV.foreach('leads.csv', :headers => true) do |row|
    lead = {
      :name => row["Lead"],
      :title => row["Title"],
      :phone_no => row["Phone"],
      :notes => row["Notes"]
    }
    @leads.push(lead)
  end
  erb :index
end

# binding.pry
