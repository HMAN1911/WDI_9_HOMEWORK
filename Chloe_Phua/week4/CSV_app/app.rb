require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'csv'


get '/' do
  @leads = CSV.read("leads.csv", headers:true)

  erb :index
end
