require_relative 'human'

class Samurai < Human
   @@how_many = 0
   def initialize
      super(stealth, strength, initelligence, health)
      @health = 200
      @@how_many+=1
   end
   def deathBlow(obj)
      obj.health = 0
   end
   def mediate
      @health = 200
   end
end