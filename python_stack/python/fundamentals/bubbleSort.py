array = [5,6,3,1,8,7,2,4]

def bubbleSort(arr):
    for x in range(len(arr)):
        for i in range(len(arr)-1):
            if array[i]>array[i+1]:
                array[i],array[i+1] = array[i+1],array[i]

    return arr
newArray = bubbleSort(array)
print(newArray)

def randomizeTeams(teamId):
    if teamId!=1:
        tempTeam = Team.objects.get(id=1)
        myTeam = Team.objects.get(id=teamId)
        
        myTeam.team_num = 1
        myTeam.save()
        
        tempTeam.team_num = teamId
        tempTeam.save()

        newId = []
        for _id in range(2,16):
            newId.append(_id, random.random())
        
        for x in newId:
            for i in newId:
                if newId[i]>newId[i+1]:
                    newId[i],newId[i+1] = newId[i+1],newId[i]

        print(newId)