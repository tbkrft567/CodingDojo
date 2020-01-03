class Mammal
   attr_accessor :health
   def initialize
      @health = 150
   end
   def displayHealth
      @health
   end
   def breath  
      puts "Inhale and exhale"
   end
   def eat
      puts "Yum yum yum"
   end
end
