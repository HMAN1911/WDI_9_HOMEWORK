require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'csv'

get '/' do
  # data = CSV.read('leads.csv', headers:true)
  # @content = ""
  # data.each do |row|
  #   @content << "<tr><td>#{row['Lead']}</td> <td>#{row['Phone']}</td></tr>"
  # end
  # erb :leads
  @content = ""
  CSV.foreach('leads.csv', headers:true) do |entry|
    @content << "<tr><td>#{entry['Lead']}</td> <td>#{entry['Phone']}</td></tr>"
  end
  erb :leads
end
