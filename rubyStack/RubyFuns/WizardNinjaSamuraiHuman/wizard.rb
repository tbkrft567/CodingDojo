require_relative 'human'
class Wizard < Human
   def initialize()
      super(strength, stealth, intelligence, health) #What is inherited
      @intelligence = 25 #Reassigning the inherited value
      @health = 50
   end
   def heal
      @health+=10
   end
   def fireball(obj)
      obj.health=-20
   end

end   
gafton = Wizard.new
# gafton.displayInformation
puts gafton.strength
puts gafton.stealth
puts gafton.intelligence
puts gafton.health