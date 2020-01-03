class MathDojo:
    def __init__(self):
    	self.result = 0
    def add(self, num, *nums):
        self.result += num
        for i in nums:
            self.result += i
        return self
    def subtract(self, num, *nums):
        self.result -= num
        for i in nums:
            self.result -= i
        return self
    def reset(self):
        self.result = 0
        return self
# create an instance:
md = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)	# should print 5
# run each of the methods a few more times and check the result!
md.reset()

x = md.add(2).add(2,10,1).subtract(3,2).result
print(x)	# should print 10

md.reset()

x = md.add(2).add(2,1).subtract(3,2).subtract(0,0,0,0,1).result
print(x)	# should print 0