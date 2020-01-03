from django.db import models
import re
from datetime import *

class UserManager(models.Manager):
    def basicValidator(self, postData):
        errors={}
        requiredFields = len(postData['firstName'])*len(postData['lastName'])*len(postData['email'])*len(postData['birthday'])*len(postData['password'])*len(postData['password_Conf'])
        if requiredFields==0:
            errors['requiredFields'] = 'All Fields are required'
        else:
            if len(postData['firstName']) < 2:
                errors['firstNameError'] = 'first name must be at least 2 characters'
            if len(postData['lastName']) < 2:
                errors['lastNameError'] = 'last name must be at least 2 characters'
            emailValidation = re.compile(r'^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
            if not emailValidation.match(postData['email']):
                errors['emailInvalid'] = 'email not in correct format'
                emailFound = User.objects.filter(email=postData['email'])
                if emailFound:
                    errors['emailFound'] = 'email is already taken'
            if datetime.today() < datetime.strptime(postData['birthday'], '%Y-%m-%d'):
                errors['futureDate'] = 'birthday must be in the past'
                if datetime.today().year - datetime.strptime(postData['birthday'], '%Y-%m-%d').year < 13:
                    errors['ageError'] = 'Must be older than 13 years'
            if len(postData['password']) < 8:
                errors['passwordError'] = 'password must be at least 8 characters'

        return errors

class User(models.Model):
    firstName = models.CharField(max_length=45)
    lastName = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    birthday = models.DateTimeField()
    password = models.CharField(max_length=255)
    objects = UserManager()
