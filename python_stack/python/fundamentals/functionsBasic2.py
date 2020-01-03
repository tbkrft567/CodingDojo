# # 1. countdown
# arg = 10
# def function(para):
#     newArr = []
#     for i in range(para,0,-1):
#         newArr.append(i)
#         print(i)
#     return newArr
# newArr = function(arg)
# print(newArr)

# # 2. Print and return
# def printReturn(para1, para2):
#     print(para1)
#     return para2

# arg1 = 1
# arg2 = 2
# x =printReturn(arg1, arg2)
# print('x: ',x)

# 3. First Plus length
# array = [1,2,3,4,5]
# def firstPlusLength(arr):
#     sum = 0
#     sum += arr[0]
#     sum += len(arr)
#     return sum
# x = firstPlusLength(array)
# print(x)

# # 4. Values Greater than second
# array = [5,2,3,2,1,4]
# def greaterThanSecond(arr):
#     counter = 0
#     newArr = []
#     for i in range(len(array)):
#         if arr[1]<arr[i]:
#             newArr.append(arr[i])
#             counter+=1
#     print(counter)
#     return newArr
# x = greaterThanSecond(array)
# print(x)


# # 5. this Length, That Valuse
# def thisAndThat(size, val):
#     newArr = []
#     for i in range(0,size):
#         newArr.append(val)
#     return newArr

# size = 12
# value = 5
# x = thisAndThat(size, value)
# print(x)