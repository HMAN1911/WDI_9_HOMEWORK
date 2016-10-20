##### Phase 2
# - New animals and clients can be added to the shelter

$clients = {
  "Nermal" => {
    :age_data => 54,
    :kids_data => 5,
    :pets_data => ['pepper', 'poppy', 'poopy']
  }
}

class Client

  def initialize
    p "client name?"
    @name = gets.chomp
    p "client's number of children?"
    @kids = gets.chomp
    p "client age?"
    @age = gets.chomp
    p "client pets?"
    @pets = gets.chomp.split(' ')
    save_client
  end

  def save_client
    $clients[@name] = {
      :age_data => @age,
      :kids_data => @kids,
      :pets_data => @pets
    }
    p $clients
  end

end
