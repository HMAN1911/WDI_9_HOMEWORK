require 'sinatra'
require 'sinatra/reloader'
require 'csv'

get '/index' do
  # @leadsArr = CSV.read("public/leads.csv")
  @leadsArr = [['lead', 'phone number'],
  ['Jim Grayson', '(555)761-2385'],
  ['Prescilla Winston', '(555)218-3981'],
  ['Melissa Potter', '(555)791-3471'],
]
  erb :index
end
