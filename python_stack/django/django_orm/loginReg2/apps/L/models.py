from django.db import models
from datetime import *
import re

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['firstName']) < 2:
            errors['firstNameError'] = 'Your first name is not what is should be'
        if len(postData['lastName']) < 2:
            errors['lastNameError'] = 'Your last name is not what is should be'
        if datetime.today()<datetime.strptime(postData['birthday'],'%Y-%m-%d'):
            errors['futureError'] = 'Date need to be in the past'
        if datetime.today().year-datetime.strptime(postData['birthday'],'%Y-%m-%d').year < 13:
            errors['ageError'] = 'person needs to be 13 or older'
        if len(postData['pw']) < 8:        
            errors['pw'] = 'Password is not what is should be'
        if postData['pw'] != postData['pwC']:
            errors['pwMatch'] = 'the password doesnt match'

        emailValidator = re.compile(r'^[a-zA-z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not emailValidator.match(postData['email']):
            errors['emailError'] = 'Your email is not what is should be'
        else:
            findEmail = User.objects.filter(email=postData['email'])
            if findEmail:
                errors['emailDuplicate'] = 'This email has already been used'

        return errors

class User(models.Model):
    firstName = models.CharField(max_length=45)
    lastName = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    birthday = models.DateTimeField()
    password = models.CharField(max_length=255)
    objects = UserManager()
