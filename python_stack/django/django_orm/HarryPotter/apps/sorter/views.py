from django.shortcuts import render

def index(request):
    context ={
        'test': 'This Works'
    }
    return render(request, 'sorter/index.html', context)