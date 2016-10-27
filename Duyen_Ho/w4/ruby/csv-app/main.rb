require 'sinatra'
require 'sinatra/reloader'
require 'csv'
require 'pry'


get '/' do

  # turns CSV into array with nested arrays
  @leads = CSV.read('leads.csv')

  # delete headers
  @leads.shift

  # get lead and phone number
  # @name = []
  # @phone = []
  #
  # @leads.each do |row|
  #   @name << row[0]
  #   @phone << row[2]
  # end

  # new problem with erb - need to loop through two arrays
  # go back to CSV.read - this process has been quite frustrating!

  erb :index

end

# binding.pry


# References:
# http://stackoverflow.com/questions/11740439/how-can-i-skip-the-header-row-when-reading-a-csv-in-ruby
# https://www.sitepoint.com/guide-ruby-csv-library-part/
# https://teamtreehouse.com/community/loop-through-array-in-an-erb-template
# http://technicalpickles.com/posts/parsing-csv-with-ruby/


# First attempt:

# # read CSV with headers - work with hash
# @leads = CSV.read('leads.csv', headers:true)
# object class = CSV::Table

# # delete unwanted columns
# @leads.delete("Title")
# @leads.delete("Notes")

# problems printing in erb - investigate another time
