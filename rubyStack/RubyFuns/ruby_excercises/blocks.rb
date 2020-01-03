def square(num)
   puts "num is #{num}"
   puts "yield(num) has a value of #{yield(6)}"
end 

square(5) { |i| i*i}