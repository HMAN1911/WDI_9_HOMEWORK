require 'sinatra'
require 'sinatra/reloader'
require 'pry'


content = File.readlines 'leads.csv'
# content.each_with_index{|line, i| puts "#{i+1}: #{line}"}
content.each do |i|
  i = i.gsub(/\"/,"")
  i = i.gsub(/\n/,"")
end


binding.pry
get '/' do

   :app
end
