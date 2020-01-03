from django.db import models

class Make(models.Model):
    Brand = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
# cars - a list of cars associated to the give maker

class Car(models.Model):
    modelName = models.CharField(max_length=15)
    year = models.IntegerField()
    brand = models.ForeignKey(Make, related_name="car")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)