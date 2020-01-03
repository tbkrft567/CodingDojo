# import the python testing framework
import unittest
# our "unit"
# this is what we are running out test on
def reverseArray(array):
    for i in range(int(len(array)/2)):
        array[i], array[len(array)-1-i] = array[len(array)-1-i], array[i]
    return array

# our "unit tests"
# initialized by creating a class that inherits from unittest.TestCase

class reverseArrayTests(unittest.TestCase):
    # each method in this class is a test to be run
    def testOne(self):
        self.assertEqual(reverseArray([1,2,3]),[3,2,1])
    def testTwo(self):
        self.assertEqual(reverseArray([5,1,2,3]),[3,2,1,5])
    # any task you want run before any method above is executed, put them in the setUp method
    def setUp(self):
        # add the setUp tasks
        print('running setUp')
    # any task you want run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        # add the tearDown tasks
        print('running tearDown tasks')
if __name__ == '__main__':
    unittest.main() # this runs our tests