Ruby

•	Most things in ruby are objects
•	OOP programming style

In the RB file:

print “Please enter your name: “
name = gets
puts “Hello #{name + lastname}! Age is #{5 + age)”

•	Use \n to push output onto the next line
•	Use \t to push a tab in the output
•	Use \s to create a space
•	Variable.upcase
•	Variable.downcase
•	Variable.reverse.downcase
•	If you use a method on a variable – generally the variable won’t change and you will just get a new return value
•	But if you do variable.upcase! with an exclamation mark you are changing that original variable for good
•	To find out the type of value in ruby - Variable.class

Methods

def method_name

end

•	Don’t have to return something but they can
•	Have to call methods
•	Call methods by just writing the name
•	Pass an argument as below

def add(x, y)
	puts “adding #{x) and #{y}:”
	puts x + y
end

add(7, 2)
adding 7 and 2:
11

Arrays

•	Check what’s in array
•	Puts grocery_list.inspect
•	To add something to an array:
•	Grocery list << “carrots”
•	Grocery_list.push(“potatoes”)
•	Grocery_list.unshift(“celery”)
•	Grocery_list.unshift(“celery”)
•	Grocery_list += [“pie”, “cake”]

Accessing items in the array
•	Fave item = Grocery_list[2]
•	Grocery_list.first
•	Grocery_list.last
•	Grocery_list.length
•	Grocery_list.count(“eggs”) – counts how many times its in the array
•	Grocery_list.include?(“water”) – looks to see if value exists in array

Adding items to the array
•	Grocery_list.insert(2, “oatmeal)

Removing items to the array
•	.shift and .pop
•	can put the value in variable and will be taken off main array
•	Grocery_list.drop(2) – drops the last two items but does NOT change the original array

To make new array from array
•	New array = Grocery_list.slice(0,3)
•	But original array will remain the same

Loops

def get_name   
  name = ""   
    loop do     
      print "Enter your name (minimum 2 characters, no numbers): "    
      name = gets.chomp     
    if name.length >= 2 && !name.index(/\d/)       
      break     
    else       
      puts "Name must be longer than 2 char, not contain numbers."     
    end   
  end   
  return name
end  

name = get_name()
puts "Hi #{name}."

While loop
answer = "" while answer != "n"   print "Do you want me to repeat this pointless loop again? (y/n) "   answer = gets.chomp.downcase end

Hashes
•	Hashes are like arrays but don’t use numbers as identifiers
•	Instead the identifier can be number, symbols, or strings

Item = { “name” => “bread, “quantity” => 1}

•	Add key value to the hash

Item[:brand] = ‘baked’
Item[“brand”] = “baked”
Item.store(“calories”, 200)

•	To get the value of a key

Item.fetch(“quantity”)  #returns 1

Hash values
•	Item.values will return all the values of the has in an array
•	Item.values_at(“brand”, “quantity”)
•	Item.invert – switches keys with values

Hash merge
•	Item.merge({‘calories’ => 100})
•	Merges two hashes together

Classes
•	A class is a way to take a grouping of functions and data and place them inside a container so you can access them with the . (dot) operator.
•	Are like a blueprint
•	string = String.new
•	When we call .new we are intialising a new instance of the string class (for example)
•	the variable string becomes an object and now we can ask it questions about itself
•	so can do string.upcase
•	to see what methods we can run on it – string.methods.sort
•	ej = String.new(“ej”) passing a string argument
•	Array.new => []
•	Hash.new => {}
•	 
