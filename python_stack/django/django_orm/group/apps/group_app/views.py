from django.shortcuts import render, redirect
from .models import users

def index(request):
    context ={
        'users': users.objects.all()
    }
    return render(request, 'group_app/index.html', context)

def process(request):
    users.objects.create(First_Last=request.POST['first_name'], Last_Last=request.POST['last_name'], Email=request.POST['Email'],Age=request.POST['Age'])
    return redirect('/')