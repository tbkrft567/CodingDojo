from django.shortcuts import HttpResponse, redirect # add redirect to import statement
def index(request):
    return HttpResponse('placeholder to later display a list of all blogs')

def new(request):
    return HttpResponse('placeholder to display a new form to create a new blog')

def show(request, number):
    return HttpResponse(f'placeholder to display blog number: {number}')

def edit(request, number):
    return HttpResponse(f'placeholder to edit blog {number}')

def create(request):
    return redirect('/')

def destroy(request, number):
    return redirect('/')


    