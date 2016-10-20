class Client

  def initialize client_name, age, children, pets
  @client_name = client_name
  @age = age
  @children = children
  @pets  =pets
  end

  def get_client_name
    @client_name
  end

  def get_age
    @age
  end
  def get_children
    @children
  end
  def get_pets
    @pets
  end
  
end
