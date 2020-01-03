class AppleTree
   attr_accessor :age
   attr_reader :height, :appleCount
   def initialize
      @age = 0
      @height = 50
      @appleCount = 0
   end
   def year_gone_by(times=1)
      for i in 1 ..times do
         @age += 1
         @height = (@height * 1.10).round
         unless @age <= 3 or @age > 10
            @appleCount += 2
         end
      end
      self
   end
   def pick_apples
      @appleCount = 0
   end

end

tree1 = AppleTree.new
tree1.year_gone_by(3)
puts tree1.age
puts tree1.appleCount
tree1.year_gone_by()
puts tree1.age
puts tree1.appleCount