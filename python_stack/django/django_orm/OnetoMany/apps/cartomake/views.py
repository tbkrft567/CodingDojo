from django.shortcuts import render, HttpResponse
from .models import Car, Make

def index(request):
    context ={
        'Cars':Car.objects.all()
    }
    
    return render(request, 'cartomake/index.html', context)
