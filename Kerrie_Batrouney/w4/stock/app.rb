require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'

get '/' do
    redirect to '/index'
end


get '/index' do
  erb :index
end

get '/findprice' do
    stock = params[:stock_name]
    result = YahooFinance::get_quotes(YahooFinance::StandardQuote, stock)
    @price = result[stock].bid
    @stock = stock.upcase
    erb :index
end
