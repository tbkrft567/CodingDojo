array = [5,6,3,1,8,7,2,4]
def selectionSort(arr):
    for init in range(len(arr)+1):
        print(arr[init], init)
        min = arr[0]
        for minFind in range(len(arr)):
            if min > arr[minFind]:
                min = arr[minFind]
                index = minFind
        for swap in range(index, 0, -1):
            arr[swap-1],arr[swap] = arr[swap], arr[swap-1]

    return arr
newArr = selectionSort(array)
print(newArr)