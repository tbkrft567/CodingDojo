class Toy:
  def __init__(self, material, name, catchphrase):
    self.name = name
    self.catchphrase = catchphrase
    self.material = material
    self.eyes = 2

  def speak(self):
    print(self.catchphrase)

woody = Toy("plastic", 'Woody', "This worked!!")

# print(woody.material)

woody.speak()


class Toy:
  def init(self, name, catchphrase, material):
    self.name = name
    self.catchphrase = catchphrase
    self.material = material
    self.eyes = 2
    self.lover = None

  #TOY METHODS GO HERE
  def speak(self):
    print(self.catchphrase)
    self.eyes = 4
    return self

  def say_info(self):
    print("I have " + str(self.eyes) + " eyes") 
    return self

woody = Toy("Woody", "Howdy partner!","fabric")
buzz = Toy("Buzz", "To infinity and beyond!", "plastic")
jessie = Toy("Jessie", "Yee-haw!", "fabric")
print(woody.name)
woody.speak().say_info()

jessie.lover 

buzz.speak()
^^^ current point we were picking up on today