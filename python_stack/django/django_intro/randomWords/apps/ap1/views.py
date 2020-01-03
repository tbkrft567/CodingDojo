from django.shortcuts import render, redirect, HttpResponse
from django.utils.crypto import get_random_string

def index(request):
    if 'previousVal' in request.session: # TRUE=VALUE HAS PRIOR COUNT
        if 'iteration' in request.session: # TRUE= ITERATION HAS OCCURRED
            if request.session['previousVal'] == request.session['iteration']: # TRUE= REGENERATION HAS NOT OCCURRED NEED TO SEND TO generate FUNCTION FOR UPDATE
                return redirect('/generate')
            else:
                request.session['previousVal'] = request.session['iteration'] # SET iteration = previousVal TO PREPARE FOR USER TO REFRESH SCREEN
        else:
            return redirect('/generate') #ITERATION HAS NOT OCCURRED - SEND TO generate FUNCTION
    else:
        request.session['previousVal'] = 0  # FIRST LOADING OF THE PAGE: previousVal SESSION DOES NOT EXISTS - CREATED HERE
    request.session.flush()
    return render(request, 'ap1/index.html')

def generate(request):
    if 'iteration' in request.session:
        request.session['iteration']+=1
    else:
        request.session['iteration']=1
    
    request.session['random'] = get_random_string(length=14)

    return redirect('/')

def reset(request):
    request.session.flush()
    return redirect('/')

