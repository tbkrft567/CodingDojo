from django.shortcuts import render, redirect
from .models import *
import bcrypt
from django.contrib import messages

def login(request):
    context={
        'users': User.objects.all()
    }

    # context['users'].delete()
    return render(request, 'wallApp/login.html', context)

def register(request):
    errors = User.objects.basic_validation(request.POST)
    if errors:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')

    passwordCrypt = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
    User.objects.create(firstName=request.POST['firstName'], lastName=request.POST['lastName'], email=request.POST['email'], password=passwordCrypt)

    return redirect('/')

def loginAttempt(request):
    searchEmail = User.objects.filter(email=request.POST['email'])
    if searchEmail:
        loggedUser = searchEmail[0]

        if bcrypt.checkpw(request.POST['password'].encode(),loggedUser.password.encode()):
            request.session['userid']=loggedUser.id
            return redirect('/success')

    messages.error(request, "email or password was entered incorrectly")
    return redirect('/')

def success(request):
    if 'userid' not in request.session:
        return redirect('/')
    context={
        'user': User.objects.get(id=request.session['userid']),
        'noteObjects': Note.objects.all(),
        'commentObjects': Comment.objects.all(),
    }
    # context['commentObjects'].delete()
    return render(request, 'wallApp/wall.html', context)

def logout(request):
    request.session.flush()
    print('here')
    return redirect('/')

def makeNote(request):
    Note.objects.create(note=request.POST['note'], user_id=User.objects.get(id=request.session['userid']))
    return redirect('/success') 

def makeComment(request, noteId):
    Comment.objects.create(comment=request.POST['comment'], user_id=User.objects.get(id=request.session['userid']), note_id=Note.objects.get(id=noteId))
    return redirect('/success') 

def deleteComment(request, commentId):
    print(commentId)
    commentToDelete = Comment.objects.get(id=commentId)
    print(commentToDelete)
    # user = User.objects.get(id=5)
    # print(user.firstName)
    # print(commentToDelete.user_id.id)
    # print(request.session['userid'])
    # print(int(commentToDelete.user_id.id) != int(request.session['userid']))
    if int(commentToDelete.user_id.id) != int(request.session['userid']):
        print('comment deleted')
    # if request.method == "GET":
        return redirect('/success')
    commentToDelete.delete()
    return redirect('/success')
