from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
import bcrypt


def index(request):
    context={
        'users': User.objects.all()
    }
    # context['users'].delete()
    return render(request, 'loginApp/index.html', context)

def register(request):
    errors = User.objects.basicValidator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        passwordCrypt = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        User.objects.create(firstName=request.POST['firstName'], lastName=request.POST['lastName'], email=request.POST['email'], birthday=request.POST['birthday'], password=passwordCrypt)
    return redirect('/')

def loginAttempt(request):
    users = User.objects.filter(email=request.POST['email']) 
    if users:
        loggedUser = users[0]
        if bcrypt.checkpw(request.POST['password'].encode(), loggedUser.password.encode()):
            request.session['userid'] = loggedUser.id
            return redirect('/success')

    messages.error(request, 'password or email incorrect')
    return redirect('/')

def success(request):
    if 'userid' not in request.session:
        return redirect('/')
    context={
        'user': User.objects.get(id=request.session['userid'])
    }
    return render(request, 'loginApp/login.html', context)

def logout(request):
    request.session.flush()
    return redirect('/')
