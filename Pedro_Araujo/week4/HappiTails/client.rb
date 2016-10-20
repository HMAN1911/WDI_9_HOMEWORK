

class Client
  def initialize(name,age,children,pets)
    @name = name
    @age = age
    @children = children
    @pets = pets
  end

  def show_name
    @name
  end

  def show_age
    @age
  end

  def show_children
    @children
  end

  def show_pets
    @pets
  end

  def adopt(new_pet)
    @pets.push(new_pet)
  end

  def leave_for_adoption(pet)
    @pets.each do |item|
      if pet == item
        @pets.delete(item)
      end
    end
  end
end



# @client_list.push(Client.new("Aaron" ,"31"  , '1', ['pet1']) )
# @client_list.push(Client.new("Burke" ,"23"  , '0', ['pet1']) )
# @client_list.push(Client.new("Chess" , "25" , '1', ['pet1']) )
# @client_list.push(Client.new("Dumbo" , "26" , '2', ['pet1']) )
# @client_list.push(Client.new("Alfred" , "32" ,'3', ['pet1']) )
# @client_list.push(Client.new("Bruce" , "31" , '2', ['pet1']) )
# @client_list.push(Client.new("Rocky"	, "22" , '1', ['pet1']) )
# @client_list.push(Client.new("Philip" , "19" , '0', ['pet1']) )
# @client_list.push(Client.new("Robert"	, "23" , '1', ['pet1']) )
# @client_list.push(Client.new("Sophie" , "43" , '1', ['pet1']) )
# @client_list.push(Client.new("Jack"	, "32" , '0', ['pet1']) )
# @client_list.push(Client.new("Sadie", "34" , '1', ['pet1']) )
# @client_list.push(Client.new("Toby"	, "52" , '2', ['pet1']) )
# @client_list.push(Client.new("Jane", "25" , '0', ['pet1']) )
# @client_list.push(Client.new("Joseph"	, "29" , '0', ['pet1']) )
# @client_list.push(Client.new("Paul", "44" , '1', ['pet1']) )
# @client_list.push(Client.new("Roger"	, "46" , '1', ['pet1']) )
# @client_list.push(Client.new("Arthur", "39" , '1', ['pet1']) )
# @client_list.push(Client.new("Drake"	, "34" , '1', ['pet1']) )
# @client_list.push(Client.new("Zoey", "61" , '3', ['pet1']) )
# @client_list.push(Client.new("Josh", "18" , '0', ['pet1']) )
