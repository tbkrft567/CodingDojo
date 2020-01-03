from django.shortcuts import render, redirect
from .models import User, UserManager
from django.contrib import messages
import bcrypt

def index(request):
    context={
        'users': User.objects.all()
    }
    # context['users'].delete()
    return render(request, 'L/index.html', context)

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        pwCrypt = bcrypt.hashpw(request.POST['pw'].encode(), bcrypt.gensalt())
        User.objects.create(firstName=request.POST['firstName'], lastName=request.POST['lastName'], email=request.POST['email'], birthday=request.POST['birthday'], password=pwCrypt)
    return redirect('/')

def loginAttempt(request):
    emailFound = User.objects.filter(email=request.POST['email'])
    if emailFound:
        userLogged = emailFound[0]
        if bcrypt.checkpw(request.POST['pw'].encode(), userLogged.password.encode()):
            request.session['userid'] = userLogged.id
            return redirect('/success')
    if 'userid' not in request.session:
        messages.error(request, 'Password or Email not found in the database')
    return redirect('/')

def success(request):
    if 'userid' not in request.session:
        messages.error(request, 'Password and Email must be entered to log in')
        return redirect('/')
    context={
        'user': User.objects.get(id=request.session['userid'])
    }
    return render(request, 'L/success.html', context)

def logout(request):
    request.session.flush()
    return redirect('/')
