from django.shortcuts import render, redirect
from .User_Functions import scheduling

def generateSchedule(request):
   scheduling.GenerateSchedule()
   return render(request, "sportapp/index.html")
   
def index(request):
   print("index")
   return render(request, "sportapp/index.html")
   
def nextSeason(request, seasonNum):
   print("nextSeason")
   return render(request, "sportapp/index.html")
   
def recruits(request):
   print("recruits")
   return render(request, "sportapp/index.html")
   
def refreshRoster(request):
   print("refreshRoster")
   return render(request, "sportapp/index.html")
   
def refreshSchedule(request):
   print("refreshSchedule")
   return render(request, "sportapp/index.html")
   
def renderNewSeason(request):
   print("renderNewSeason")
   return render(request, "sportapp/index.html")
   
def seeGame(request):
   print("seeGame")
   return render(request, "sportapp/index.html")
   
def seePlayoffs(request):
   print("seePlayoffs")
   return render(request, "sportapp/index.html")
   
def seeRoster(request, teamId):
   print("seeRoster")
   return render(request, "sportapp/index.html")
   
def seeSchedule(request, teamId):
   print("seeSchedule")
   return render(request, "sportapp/index.html")
   
def seeStandings(request):
   print("seeStandings")
   return render(request, "sportapp/index.html")
   
def simEntireSeason(request):
   print("simEntireSeason")
   return render(request, "sportapp/index.html")
   
def simGame(request):
   print("simGame")
   return render(request, "sportapp/index.html")
   
def startSeason(request):
   print("startSeason")
   return render(request, "sportapp/index.html")
   
def updateWeek(request):
   print("updateWeek")
   return render(request, "sportapp/index.html")
   

