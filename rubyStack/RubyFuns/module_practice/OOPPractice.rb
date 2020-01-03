# class Dragon

#    def first_name #getter
#       return @first_name
#    end
#    def first_name=val #setter
#       @first_name = val
#    end
#    attr_reader :first_name #getter
#    attr_writer :first_name #setter
#    attr_accessor :first_name #setter and getter

#    def initialize()
#       @first_name = "Paul"
#       @last_name = "george"
#    end
# end


# eragon = Dragon.new
# # smaug = Dragon.new

# puts eragon.first_name
# eragon.first_name = "Eragon"
# puts eragon.first_name




#************************Examples
class Warrior
   attr_accessor :firstName, :lastName
   attr_reader :family
   def initialize(f_name,l_name)
      @firstName = f_name
      @lastName = l_name
      @family = "Richie's"
   end
end 
soldier1 = Warrior.new('Richard','Thompson')
puts soldier1.firstName


