class Project
   attr_accessor :name, :description
   def initialize()
      @name = name
      @description = description
   end
   def elevator_pitch
      p "#{self.name}, #{self.description}"
   end
end