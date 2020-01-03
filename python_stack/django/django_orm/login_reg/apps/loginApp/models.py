from django.db import models
import re
from datetime import *


class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['firstName']) < 2:
            errors['firstNameError'] = "Your first name must be at least 2 characters"
        if len(postData['lastName']) < 2:
            errors['lastNameError'] = "Your last name must be at least 2 characters"
        if datetime.today()<datetime.strptime(postData['birthday'], '%Y-%m-%d'):
            errors['futureDateError'] = "Birthday must be a date in the past"
        if datetime.today().year-datetime.strptime(postData['birthday'], '%Y-%m-%d').year < 13:
            errors['ageError'] = "Must be 13 years of age to register"
        if len(postData['password']) < 8:
            errors['passwordLengthError'] = "Your password must be at least 8 characters"
        if postData['password'] != postData['password_conf']:
            errors['passwordMatch'] = "The passwords you have entered do not match"
        
        # Email Vaildation using REGEX
        emailValidation = re.compile(r'^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not emailValidation.match(postData['email']):
            errors['emailError'] = "Your email does not appear be a standard email"
        else:
            findEmail = User.objects.filter(email=postData['email'])
            if findEmail:
                errors['emailDuplicate'] = "This email has already been used"

        return errors


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    objects = UserManager()
