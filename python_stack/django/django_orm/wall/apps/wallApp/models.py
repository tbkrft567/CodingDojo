from django.db import models
import re
from datetime import *


class UserManager(models.Manager):
    def basic_validation(self, postData):
        errors = {}
        requiredFields = len(postData['firstName'])*len(postData['lastName'])*len(postData['email'])*len(postData['password'])*len(postData['password_conf'])
        if requiredFields == 0:
            errors['requiredFields'] = "All fields are required"
        if len(postData['firstName']) < 2:
            errors['firstNameError'] = "First Name must be at least 2 characters"
        if len(postData['lastName']) < 2:
            errors['lastNameError'] = "Last Name must be at least 2 characters"
        # email
        emailValidation = re.compile(r'^[a-zA-Z0-9._+-]+@[a-zA-Z._-]+\.[a-zA-Z]+$')
        if not emailValidation.match(postData['email']):
            errors['emailError'] = "Email is not formatted correctly"
        emailDB = User.objects.filter(email=postData['email'])
        if emailDB:
            errors['emailDupError'] = "Email already exist in the database"
        if len(postData['password']) < 8:
            errors['passwordError'] = "password must be at least 8 characters"
        if postData['password'] != postData['password_conf']:
            errors['passwordMatchError'] = "Password does not match"

        return errors


class User(models.Model):
    firstName = models.CharField(max_length=45)
    lastName = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    udpated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()


class Note(models.Model):
    note = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user_id = models.ForeignKey(User, related_name="notes")


class Comment(models.Model):
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    note_id = models.ForeignKey(Note, related_name="comments")
    user_id = models.ForeignKey(User, related_name="comments")
