from django.db import models

class users(models.Model):
    First_Last = models.CharField(max_length=45)
    Last_Last = models.CharField(max_length=45)
    Email = models.CharField(max_length=200)
    Age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
