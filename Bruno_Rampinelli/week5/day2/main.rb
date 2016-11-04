require 'sinatra'
require 'sinatra/reloader'

require 'pry'
require_relative 'db_config'
require_relative 'models/player'
require_relative 'models/player_position'
require_relative 'models/team'
#create a function to make the code DRY



#show all players

get '/' do
  @players = Player.all
  erb :index
end

get '/players/new' do

  @player_positions = PlayerPosition.all
  @teams = Team.all

  erb :players_new

end

get '/players/:id' do
  @player = Player.find(params[:id])

  erb :players_show
end


#create a new player

post '/players' do

  player = Player.new
  player.name = params[:name]
  player.image_url = params[:image_url]
  player.player_position_id = params[:player_position_id]
  player.nationality = params[:nationality]
  player.team_id = params[:team_id]



  player.save

  redirect '/'
end
