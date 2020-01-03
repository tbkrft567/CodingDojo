from django.shortcuts import render, HttpResponse

def index(request):
    context = {'test': 'This works~~'}
    return render(request, 'ap/index.html', context)
