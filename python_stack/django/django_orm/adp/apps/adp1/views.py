from django.shortcuts import render, redirect
from .models import Athlete, Award

def athlete(request):
    context = {
        'Athlete': Athlete.objects.all(),
        'section': 'athlete'
    }
    return render(request, 'adp1/index.html', context)

def award(request):
    context = {
        'Award': Award.objects.all(),
        'section': 'award'
    }
    return render(request, 'adp1/index.html', context)

def addProcess(request, section):
    if section == 'athlete':
        Athlete.objects.create(first_name=request.POST['firstName'], last_name=request.POST['lastName'], years_played=request.POST['yearsPlayed'], history=request.POST['history'])
        return redirect('/')
    if section == 'award':
        Award.objects.create(title=request.POST['title'], description=request.POST['description'])
        return redirect('/award')

def displayDesc(request, section, id):
    if section == 'athlete':
        context = {
            'Athlete': Athlete.objects.get(id=id),
            'section': section,
            'Awards': Athlete.objects.get(id=id).awards.all(),
            'addAwards': Award.objects.all(),
        }
        return render(request, 'adp1/descr.html', context)
    if section == 'award':
        context = {
            'Award': Award.objects.get(id=id),
            'section': section,
            'Athletes': Award.objects.get(id=id).athletes.all(),
            'addAthletes': Athlete.objects.all(),
        }
        return render(request, 'adp1/descr.html', context)

def appendProcess(request, section, id):
    if section == 'athlete':
        Award.objects.get(id=id).athletes.add(Athlete.objects.get(id=request.POST['addAthlete']))
        section = 'award'
        return redirect('/'+section+'Desc/'+id)
    if section == 'award':
        Athlete.objects.get(id=id).awards.add(Award.objects.get(id=request.POST['addAward']))
        section = 'athlete'
        return redirect('/'+section+'Desc/'+id)