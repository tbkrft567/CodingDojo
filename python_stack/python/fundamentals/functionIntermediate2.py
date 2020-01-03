## 1. 
# x = [[5,2,3],[10,8,9]]
# x[1][0] = 15
# print(x)

# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# students[0]['last_name']='Bryant'
# print(students)

# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }

# sports_directory['soccer'][0] = 'Andres'
# print(sports_directory['soccer'][0], sports_directory['soccer'])
# z = [ {'x': 10, 'y': 20} ]
# z[0]['y']=30
# print(z)

# ## 2.
# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
# for i  in range(len(students)):
#     print("first_name: ", students[i]['first_name'],', ', "Last_name: ", students[i]['last_name'])

# ## 3.
# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
# def iterateDictionary(keyName, listName):
#     for i in range(len(listName)):
#         print(listName[i][keyName])

# iterateDictionary('first_name', students)

# def iterateDictionary(keyName, listName):
#     for i in range(len(listName)):
#         print(listName[i][keyName])

# iterateDictionary('last_name', students)

## 4.
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
# print name of each key, size of key, print associated alues with eah key
# for x in range(len(dojo.get('locations'))):
#     print(dojo.get('locations')[x])
# for x in range(len(dojo.get('instructors'))):
#     print(dojo.get('instructors')[x])

# print(len(dojo['locations']))

for key in dojo:
    print(len(dojo[key]), key)
    for i in range(len(dojo[key])):
        print(dojo.get(key)[i])




