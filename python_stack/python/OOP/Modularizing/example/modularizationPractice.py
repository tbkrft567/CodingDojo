# modularization

class Gradebook:
    def __init__(self, course):
        self.grades = []
        self.students = []
        self.course = course

class Student:
    def __init__(self, name):
        self.name = name
        self.courses = []
        self.grades = []

class Course:
    def __init__(self, name, sectionNum):s
        self.name = name
        self.sectionNum = sectionNum

