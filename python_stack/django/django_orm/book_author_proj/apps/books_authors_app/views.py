from django.shortcuts import render, redirect, HttpResponse
from .models import Book, Author

def books(request):
    context={
        'Book': Book.objects.all(),
        'section': 'book'
    }
    return render(request, 'books_authors_app/index.html', context)

def authors(request):
    context={
        'Author': Author.objects.all(),
        'section': 'author'
    }
    return render(request, 'books_authors_app/index.html', context)

def addProcess(request, section):
    if section == 'book':
        Book.objects.create(title=request.POST['bookTitle'], desc=request.POST['bookDesc'])
        return redirect('/')
    if section == 'author':
        Author.objects.create(first_name=request.POST['authFirst'], last_name=request.POST['authLast'], notes=request.POST['authNotes'])
        return redirect('/author')


def descDisplay(request, section, id):
    
    if section == 'book':
        context = {
            'Book': Book.objects.get(id=id),
            'section': section,
            'authors': Book.objects.get(id=id).authors.all(),
            'addAuthor': Author.objects.exclude(books__id=id),
        }
    if section == 'author':
        context = {
            'Author': Author.objects.get(id=id),
            'section': section,
            'books': Author.objects.get(id=id).books.all(),
            'addBook': Book.objects.exclude(authors__id=id),
        }
    return render(request, 'books_authors_app/descriptions.html', context)


def appendProcess(request, section, id):
    
    if section == 'author':
        bookId = id
        authorId = request.POST['authorid']
        Book.objects.get(id=bookId).authors.add(Author.objects.get(id=authorId))
        section = 'book'
        return redirect('/'+section+'Desc/'+bookId)
    if section == 'book':
        authorId = id
        bookId = request.POST['bookid']
        Author.objects.get(id=authorId).books.add(Book.objects.get(id=bookId))
        section = 'author'
        return redirect('/'+section+'Desc/'+authorId)
