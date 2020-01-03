from django.db import models

class Wizard(models.model):
    name = models.CharField(max_length=45)
    house = models.CharField(max_length=45)
    pet = models.CharField(max_length=45)
    year = models.IntegarField()

def __repr__(self):
    return (f'Title: {self.name}, {self.house}')