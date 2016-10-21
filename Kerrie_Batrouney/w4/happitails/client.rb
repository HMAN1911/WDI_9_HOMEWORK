

class Client

  def initialize(client, kids, c_age, pets)
    @client = client
    @kids = kids
    @age = c_age
    @pets = pets
  end

  def get_client_name
    return @client
  end

  def get_client_age
    return @age
  end

  def get_client_kids
    return @kids
  end

  def get_client_pets
      return @pets
  end

  def add_pets(pets)
    @pets += pets
  end

  def remove_pets(pets)
    @pets -= pets
  end
end
