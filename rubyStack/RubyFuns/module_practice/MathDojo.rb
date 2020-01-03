class MathDojo
   attr_accessor :result 
   def initialize()
      @result = 0
   end
   def add(*para1)  # [2]
      para1.flatten.each {|i| @result += i}
      self
   end
   def substract(*para1)
      para1.flatten.each {|i| @result -= i}
      self
   end
   def result
      puts @result
      self
   end
end

challenge1 = MathDojo.new.add(2).add(2,5,6,7).substract(3,2).result
challenge2 = MathDojo.new.add(1).add([3,5,7,8],[2,4.3,1.25]).substract([2,3],[1.1,2.3]).result