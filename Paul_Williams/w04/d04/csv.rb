require 'sinatra'
require 'sinatra/reloader'
require 'csv'

get '/' do
  data = IO.read("leads.csv").gsub("\"", "").split("\n")
  leads = []
  data.each { |x| leads.push(x.split(/,(?!\s)/)) }
  @content = ""
  leads.each { |x| @content += "<tr><td>#{x[0]}</td><td>#{x[2]}</td></tr>" }
  erb :index
end

=begin

SOLUTION WITH CSV LIBRARY

get '/' do
  @content = ""
  CSV.foreach 'leads.csv' do |x|
    @content += "<tr><td>#{x[0]}</td><td>#{x[2]}</td></tr>"
  end
  erb :index
end
=end

=begin
# CSV App

build a sinatra web app with a single route

```
get '/'
```

when a user visit your app at '/' it should display the lead name and phone number in a table

lead|phone number
-----|--------------
Jim Grayson | (555)761-2385
=end
