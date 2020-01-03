require_relative 'human'

class Ninja < Human
   def initialize
      super(stealth, strength, intelligence, health)
      @stealth = 175
   end
   def steal
      @health+=10
   end
   def getAway
      @health-=15
   end

end

zach = Ninja.new
puts zach.stealth

