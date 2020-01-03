from django.shortcuts import render, redirect
from .models import *

def book(request):
    context={
        'Books': Book.objects.all(),
        'section': 'book'
    }
    return render(request, 'pt1\index.html', context)

def author(request):
    context={
        'Authors': Author.objects.all(),
        'section': 'author'
    }
    return render(request, 'pt1\index.html', context)

def addProcess(request, section):
    if section == 'book':
        Book.objects.create(title=request.POST['title'],description=request.POST['desc'])
        return redirect('/')
    if section == 'author':
        Author.objects.create(first_last=request.POST['firstName'],last_last=request.POST['lastName'], notes=request.POST['notes'])
        return redirect('/author')

def displayDesc(request, section, id):
    if section == 'book':
        context={
            'Book': Book.objects.get(id=id),
            'section': section,
            'Authors': Book.objects.get(id=id).authors.all(),
            'addAuthor': Author.objects.all(),
        }
    if section == 'author':
        context={
            'Author': Author.objects.get(id=id),
            'section': section,
            'Books': Author.objects.get(id=id).books.all(),
            'addBook': Book.objects.all(),
        }
    return render(request, 'pt1/description.html', context)


def appendProcess(request, newAppend, id):
    if newAppend == 'author':
        print(request.POST['newAuthor'])
        Book.objects.get(id=id).authors.add(Author.objects.get(id=request.POST['newAuthor']))
        section = 'book'
        return redirect('/'+section+'Desc/'+id)
    if newAppend == 'book':
        Author.objects.get(id=id).books.add(Book.objects.get(id=request.POST['newBook']))
        section = 'author'
        return redirect('/'+section+'Desc/'+id)

        # need to redirect to url(r'^(?P<section>\w+)Desc/(?P<id>\d+)$', views.displayDesc)
    ## need to add determine how to add auhtor book and book to author