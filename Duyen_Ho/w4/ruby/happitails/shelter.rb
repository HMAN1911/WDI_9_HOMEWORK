# - Shelter:
#   - The shelter should display all the clients.
#   - The shelter should display all the animals.


class Shelter

  def initialize
    @all_clients = []
    @all_animals = []
  end

  def add_client client
    @all_clients << client
  end

  def add_animal animal
    @all_animals << animal
  end

  def display_clients clients
    # loop through @clients array
    # get key and value for each hash in array
    # how to access client data
    # print string
    # incorporate index to help facilitate adoption

    # investigate:

    # clients.each_with_index do |element,index|
    #   element.do_stuff(index)
    # end

    # for i in Happitails do
    #   element.do_stuff
    # end

    # Happitails.each do |key, value|
    #   puts key
    #   puts value
    # end

    return @all_clients
  end



  def display_animals

    # array.each_with_index do |element,index|
    #   element.do_stuff(index)
    # end

  end

end


# Maybe incorporate Relationships in this class to KIS

# - Relationships:
#   - A client should be able to adopt an animal.
#   - A client should be able to put an animal up for adoption
