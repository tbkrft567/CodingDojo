from django.db import models

class Athlete(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    years_played = models.IntegerField()
    history = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def __repr__(self):
    return f"<Award object: {self.first_name} {self.last_name} ({self.id})>"

class Award(models.Model):
    title = models.CharField(max_length=45)
    description = models.TextField()
    athletes = models.ManyToManyField(Athlete, related_name='awards')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def __repr__(self):
    return f"<Award object: {self.title} ({self.id})>"
