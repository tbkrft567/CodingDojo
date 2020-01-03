from django.shortcuts import render, redirect
from .models import *

def index(request):
    context={
        'Dojo': Dojo.objects.all()
        
    }
    return render(request, 'dojo_ninjas_app/index.html', context)

def dojo(request):
    Dojo.objects.create( name= request.POST['Name'], city=request.POST['City'], state=request.POST['State'])
    return redirect ("/")

def dojo1(request):
    ninjas.objects.create(first_name=request.POST['First Name'], last_name=request.POST['Last Name'], dojo=Dojo.objects.get(id=request.POST['options']))
    return redirect ("/")