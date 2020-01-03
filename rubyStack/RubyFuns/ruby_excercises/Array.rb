a = [1,2,3,8,5,6,7,8]
puts "\n"

puts "Lenght of array is %d" % a.length
puts a.at(5)
puts a.fetch(5)
a.delete_at(5)
puts a.to_s
a.delete(5)
puts a.to_s
puts a.reverse.to_s
puts "Lenght of array is %d" % a.length
puts a.sort.reverse.to_s
puts a.slice(0,3).to_s
puts a.slice!(3,3).to_s
puts a.to_s
puts a.shuffle.to_s
puts a.to_s
puts a.join("~~")
puts a.insert(1, 8, 9, 10).to_s
puts a.values_at(5, 7, 9)

puts "\n"
