module MyEnumerable
  def my_each()
   if block_given?
      i=0
      while i < self.size
         yield(self[i])
         i += 1
      end
   end
  end
end

class Array
   include MyEnumerable
end

[2,2,3,4].my_each{|i| puts i} # => 1 2 3 4
[2,2,3,4].my_each {|i| puts i * 10} # => 1 2 3 4
