require_relative 'Mammal2'
class Lion < Mammal

   def displayHealth
      puts "This is a lion"
      self.health += 20
      puts "His health is #{self.health}"
      # super
   end
   def fly x = 1
      self.health -= 10 * x
      self
   end
   def attack_town x = 1
      self.health -= 50 * x
      self
   end
   def eat_humans x = 1
      self.health += 20 * x
      self
   end

end

roger = Lion.new
# roger.attack_town(3).eat_humans(2).fly(2)
roger.displayHealth