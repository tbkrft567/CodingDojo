# ? ANY -- true or false
x = ["any", "bear", "cat"].any? {   |word| word.length >= 3 } # => true
puts x.to_s
# ? EACH -- calls block once for each element in ruby self, passing that element as a block parameter.
["any", "bear", "cat"].each {   |word| print word, "--" } 

# ? COLLECT -- returns a new array with the results of running block once for every element in enum
x = (1..4).collect { |i| i*i}
puts x.to_s

# ? DETECT/FIND -- returns the first for which block is not false
y = (1..10).detect {|i| i % 5 == 0 and i % 7 == 0}
x = (1..100).detect {|i| i % 5 == 0 and i % 7 == 0}
puts y; puts x

# ? FIND_ALLL { |obj| block } or .select { |obj| block } => returns an array containing all elements of enum for which block is not
(1..10).find_all {|i| I % 3 == 0}

# ? REJECT { |obj| block } => opposite of find_all
(1..10).reject {|i| i % 3 == 0}

# ? .UPTO(LIMIT) => iterates block up to the int number
5.upto(10) { |i| print i, " "}