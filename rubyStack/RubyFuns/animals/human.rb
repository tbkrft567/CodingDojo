require_relative 'mammal2'
class Human < Mammal # Human inherits from Mammal
   def subclass_method
     breath
   end
   def another_method
     self.eat
   end
end
human = Human.new
human.subclass_method
human.another_method
