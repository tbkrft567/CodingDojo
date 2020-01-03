class Human
   attr_accessor :stealth, :strength, :intelligence, :health #What can be inherited
   def initialize(stealth, strength, intelligence, health) #What can be inherited
      @strength = 3
      @stealth = 3
      @intelligence = 3
      @health = 100
   end
   def attack(obj)
      if obj.class.ancestors.include?(Human)
         obj.health-=10
         true
      else
         false
      end
   end
end