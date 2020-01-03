from django.shortcuts import render, redirect

def index(request):
    if request.method == "GET":
        print("a GET request is being made to this route")
        return render(request, "wordApp1/index.html")
    if request.method== "POST":
        print('test' in request.session) 
        request.session['test'] = request.POST['name']
        print(request.POST)
        print(request.session['test'])
        print ("a POST request is being made to this route")
        return redirect('/')