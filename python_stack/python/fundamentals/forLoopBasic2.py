# # 1
# array = [1,-2,3,-4,5]
# def biggies(arr):
#     for i  in range(len(arr)):
#         if arr[i]>0:
#             arr[i]="big"
#     return arr
# x = biggies(array)
# print(x)

# # 2
# array = [1,-2,3,-4,5]
# def countPos(arr):
#     counter = 0
#     for i in range(len(arr)):
#         if arr[i]>0:
#             counter+=1
#     arr[len(arr)-1] = counter
#     return arr
# x =countPos(array)
# print(x)

# # 3
# array = [1,-2,3,-4,5]
# def sumTotal(arr):
#     sum = 0
#     for i in range(len(arr)):
#         sum += arr[i]
#     return sum
# x =sumTotal(array)
# print(x)

# # 4 
# array = [1,-2,3,-4,5]
# def Averager(arr):
#     sum = 0
#     for i in range(len(arr)):
#         sum +=arr[i]
    
#     average = (sum/len(arr))
#     return average
# x = Averager(array)
# print(x)

# # 5
# array = [1,-2,3,-4,5]
# def getLength(arr):
#     val = len(arr)
#     returns
# x = getLength(array)
# print(x)

# # 6
# array = [1,-2,3,-4,5]
# def getMinimum(arr):
#     min = arr[0]
#     for i  in range(len(arr)):
#         if min>arr[i]:
#             min = arr[i]
#     return min
# x = getMinimum(array)
# print(x)

# # 7
# array = [1,-2,3,-4,5]
# def getMaximum(arr):
#     max = arr[0]
#     for i  in range(len(arr)):
#         if max<arr[i]:
#             max = arr[i]
#     return max
# x = getMaximum(array)
# print(x)

# # 8
# array = [1,-2,3,-4,5]
# def ultimateAnalysis(arr):
#     analysis = {
#         'sumTotal': 0,
#         'average': 0,
#         'minimum': arr[0],
#         'maximium': arr[0],
#     }

#     for i in range(len(arr)):
#         analysis['sumTotal']+=arr[i]
#         if analysis['minimum'] > arr[i]:
#             analysis['minimum'] = arr[i]
#         if analysis['maximium'] < arr[i]:
#             analysis['maximium'] = arr[i]
#     analysis['average'] = analysis['sumTotal']/len(arr)

#     return analysis
# x = ultimateAnalysis(array)
# print(x)

# # 9
# array = [1,-2,3,-4,5]
# def reverse(arr):
#     for i in range(int(len(arr)/2)):
#         temp = arr[i]
#         arr[i] = arr[len(arr)-1-i]
#         arr[len(arr)-1-i] = temp
#     return arr
# x = reverse(array) 
# print(x)