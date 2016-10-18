def get_number(order, operation, continue)
  loop do
    if operation == "sqrt" || continue == true
      puts "Number:"
    elsif order == 1
      puts "First number:"
    elsif order == 2
      puts "Second number:"
    end
    input = gets.chomp.gsub(" ","")
    if (input[0] === "-") 
      negative = true
      input[0] = ""
    end
    input_int = input.to_i
    checkAlpha = input.gsub(/[0-9]|/, "")
    if checkAlpha == "" && input != ""
      if negative
        input_int = -input_int
      end
      return input_int
    end
  end
end

def get_operation
  loop do
    input = gets.chomp.downcase.gsub(" ","")
    input_options = ["+", "-", "*", "/", "^", "sqrt", "quit"]
    if input_options.index(input) != nil
      return input
    end
    puts "Please input a valid operator: + - * / ^ sqrt"
  end
end


def main
  puts "\nWELCOME TO CALCULATRON"
  loop do
    puts "What would you operation like to do today?"
    puts "Please input one of these operators: + - * / ^ sqrt"
    puts "or type quit to end the application"
    operation = get_operation
    if operation == "quit"
      puts "\nGoodbye My Love\n"
      break
    end
    continue = false
    number_1 = get_number(1, operation, continue)

    loop do

      if operation != "sqrt"
        number_2 = get_number(2, operation, continue)
      end

      case operation
      when "+"
        result = number_1 + number_2
      when "-"
        result = number_1 - number_2
      when "*"
        result = number_1 * number_2
      when "/"
        result = number_1 / number_2
      when "^"
        result = number_1 ** number_2
      when "sqrt"
        result = Math.sqrt(number_1)
      end

      puts "YOUR RESULT: #{result}\n"
      puts "To continue operating, input a new operator or type quit to return to the menu\n"
      operation = get_operation
      if operation == "quit"
        continue = false
        break
      end
      number_1 = result
      continue = true
    end
  end

end

main



# def get_number(max)

# end

