class Client

  def initialize(name, no_of_children, age)
    @name = name
    @no_of_children = no_of_children
    @age = age
    @pets_adopted = []
  end

  def get_name
    @name
  end

  def get_no_of_children
    @no_of_children
  end

  def get_age
    @age
  end

  def add_pet(pet)
    @pets_adopted << pet
  end

  def remove_pet(pet)
    @pets_adopted.delete_at(pet)
  end

end
