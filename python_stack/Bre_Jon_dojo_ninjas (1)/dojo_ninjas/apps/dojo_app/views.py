from django.shortcuts import render, redirect
from .models import Dojo, Ninja

def index(request):
    context = {
        "all_the_dojos": Dojo.objects.all(),
        "all_the_ninjas": Ninja.objects.all()
    }
    return render(request, "dojo_app/index.html", context)

def add_dojo(request):
    if request.method =="POST":
        Dojo.objects.create(name=request.POST['name'],city=request.POST['city'],state=request.POST['state'])
    return redirect('/')

def add_ninja(request):
    if request.method =="POST":
        Ninja.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],dojo=Dojo.objects.get(id=request.POST['dojo']))
    return redirect('/')

def delete(request, my_val):
    print(my_val)
    ninja = Ninja.objects.get(id=my_val)
    ninja.delete()  
    return redirect('/')
