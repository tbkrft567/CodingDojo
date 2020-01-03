from django.shortcuts import render, redirect
from .models import Book, Author

def book(request):
    context = {
        'data':  Book.objects.all(),
    }
    return render(request, 'books_authors_proj/index.html', context)

def author(request):
    context={
        'addElement': 'author',
        'data': Author.objects.all(),
    }
    return render(request, 'books_authors_proj/index.html', context)

# def addBook(request):
#     return redirect('/')

# def addAuthor(request):s
#     return redirect('/author')

def authorsDesc(request, num):
    context={
        'test': 'this works '+ str(num)
    }
    return render(request, 'books_authors_proj/descriptions.html', context)

def booksDesc(request, num):
    context={
        'test': 'this works '+ str(num)
    }
    return render(request, 'books_authors_proj/descriptions.html', context)