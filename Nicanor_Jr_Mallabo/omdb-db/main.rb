require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    if (params['title'] == nil) then
        @result = HTTParty.get('http://omdbapi.com/?s=' + 'Batman&y=2016')['Search']
        erb :index
    else 
        @result = HTTParty.get('http://omdbapi.com/?s=' + params['title'])['Search']
        if (@result != nil) then
            erb :result
        else
            erb :error
        end
    end

end


    