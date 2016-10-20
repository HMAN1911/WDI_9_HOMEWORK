# CSV App
#
# build a sinatra web app with a single route
#
# get '/'
# when a user visit your app at '/' it should display the lead name and phone number in a table
#
# lead	phone number
# Jim Grayson	(555)761-2385

require 'sinatra'
require 'sinatra/reloader'
require 'csv'
require 'pry'

# binding.pry

get '/' do
  @leads = CSV.read("leads.csv")
  erb :leads
end
