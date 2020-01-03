class Dragon
   attr_accessor :firstName, :lastName
   attr_reader :colorOfFlame, :height
   def initialize(f_Name, l_Name, colorOfFlame, height)
      @firstName = f_Name
      @lastName = l_Name
      @colorOfFlame = colorOfFlame
      @height = height.to_i # in inches
   end
   def changeFlame(colorOfFlame)
      @colorOfFlame = colorOfFlame
   end
end

Andrew = Dragon.new("Ender", "Wiggins", "Black", "1050")

puts Andrew.firstName
puts Andrew.lastName
puts Andrew.colorOfFlame
Andrew.changeFlame("White")
puts Andrew.colorOfFlame

puts Andrew.height
# Andrew.height = 12,000

puts Andrew

Barney = Dragon.new("Barney", "Dinosaur", "Green", "70")

# puts Barney.firstName
puts "My name is #{Barney.firstName} #{Barney.lastName}"
puts "My name is %s %s %s" % [Barney.firstName, Barney.lastName, Barney.colorOfFlame]

puts Barney.lastName
puts Barney.colorOfFlame
Barney.changeFlame("Pink")
puts Barney.colorOfFlame

puts Barney.height
# Barney.height = 12,000

puts Barney


