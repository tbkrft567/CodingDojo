from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, 'loginApp\index.html')

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        cryptPassword = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        User.objects.create(first_name=request.POST['firstName'], last_name=request.POST['lastName'], email=request.POST['email'], password=cryptPassword)
    return redirect('/')

def loginAttempt(request):
    user = User.objects.filter(email=request.POST['email'])
    if user:
        logged_user = user[0]
        bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode())
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['userid'] = logged_user.id
            return redirect('/success')
    if 'userid' not in request.session:
        messages.error(request, 'Email or Password is incorrect')
    return redirect('/')

def success(request):
    if 'userid' not in request.session:
        return redirect('/')
    else:
        context={
            'userName': User.objects.get(id=request.session['userid']).first_name
        }
    return render(request, 'loginApp/success.html',context)

def logOut(request):
    request.session.flush()
    return redirect('/')
