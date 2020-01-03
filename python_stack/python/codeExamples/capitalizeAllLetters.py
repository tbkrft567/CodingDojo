text = "hoWeWoWk"

def upperCase(text):
    newStr = ""
    for i in text:
        i = ord(i)-32
        newStr += chr(i)
        
    return newStr

def lowerCase(text):
    newStr = ""
    for i in text:
        i = ord(i)+32
        newStr += chr(i)
        
    return newStr    

# print(text)
# newStr = upperCase(text)
# print(newStr)
# newStr = lowerCase(newStr)
# print(newStr)


# print(ord('A'))


# for i in range(300):
#     print(str(i)+': '+chr(i))

def isNum(string):
    newStr = ""
    for i in string:
        if 48<=ord(str(i))<=57:
            newStr += i
    return newStr
    # return 48<=ord(str(z))<=57
newStr = isNum('hel1lo')
print(newStr)