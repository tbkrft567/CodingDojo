class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.car = []
    
    def purchaseCar(self, newCar):
        self.car.append(newCar)
        return self

    def viewCars(self,id="", key=""):
        if id=="" and key=="": 
            # listOfCars = self.car
            for i in range(len(self.car)):
                print('Car '+str(i+1)+' owned by '+self.name+': '+str(self.car[i]['make'])+' '+str(self.car[i]['model'])+' '+str(self.car[i]['color'])+' '+str(self.car[i]['year']))
        else:
            print(self.name+'\'s car #'+str(id+1)+' is a '+str(self.car[id][key]))

class Car:
    def __init__(self, make, model, color, year):
        self.make = make
        self.model = model
        self.color = color
        self.year = year

    def getCarDetails(self):
        newCar = {'make': self.make, 'model': self.model, 'color': self.color, 'year': self.year }
        return newCar

person1 = Person('Zach', 28)
car1 = Car('Chevy', 'Cruze', 'blue', 2016)
car2 = Car('Toyota', 'Corolla', 'white', 2015)
person1.purchaseCar(car1.getCarDetails())
person1.purchaseCar(car2.getCarDetails())
person1.viewCars()
person1.viewCars(1,'year')
# person1.purchaseCar(car2.getCarDetails()).viewCars(1,'make')
# person1.viewCars()
