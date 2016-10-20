require 'yahoofinance'
# result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')

require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pp'
require 'csv'

get '/' do
  @leads = CSV.read('leads.csv')
  erb :index
end