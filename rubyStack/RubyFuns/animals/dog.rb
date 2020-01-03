require_relative 'mammal2'
class Dog < Mammal
   # attr_accessor :firstName
   # def initialize(f_name) 
   #    @firstName = f_name
   # end
   def displayDogHealth
      displayHealth
   end
   def pet x=1
      self.health += 5 * x
      self
   end
   def walk x=1
      self.health -= 1 * x
      self
   end
   def run x=1
      self.health -= 10 * x
      self
   end
end
   roger = Dog.new
   roger.walk(3).run(2).pet()
   roger.displayDogHealth