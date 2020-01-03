from django.shortcuts import render
from .models import users

def index(request):
    context = {
        'users': users.objects.all(),
    }
    return render(request, 'users_app/index.html', context)