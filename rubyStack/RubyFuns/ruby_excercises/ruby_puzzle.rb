# ? Ruby Puzzle

# 1.
# array = [3,5,1,2,7,9,8,13,25,32]
# def printAndSum(arr)
#    sum = 0
#    arr.each{
#       |i|
#       sum+=i
#    }
#    puts sum
#    newArr = arr.reject {
#       |i|
#       i < 10
#    }
#    return newArr
# end

# newArray = printAndSum(array)
# puts newArray.to_s

# array = ["John","KB","Oliver","Cory","Matthew","Christopher"]
# def shufflePrint(arr)
#    arr.shuffle.each {|i| puts i}
#    newArr = arr.reject {|i| i.length <= 5}
#    return newArr
# end

# newArray = shufflePrint(array)
# puts newArray.to_s

# array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
# def shuffleAndPrint2(arr)
#    arr.shuffle!
#    puts "this is the last element %s" % arr.last
#    puts "this is the last element #{arr.first}"
#    puts arr.to_s 
#    if (arr.first =~/[aeiou]/)
#       puts "This is the letter"
#    end
# end
# shuffleAndPrint2(array)

# array = []
# 1.upto(10){
#    array << rand(55..100)
# }
# puts array

# array = []
# 1.upto(10){
#    array << rand(55..100)
# }
# puts array.sort!.join(', ')
# puts "Ths is the min #{array.min}"
# puts "Ths is the max #{array.max}"

# stringer = ""
# 1.upto(5){
#    stringer += (65+rand(26)).chr
# }
# puts stringer

# array = []
# 1.upto(10){
#    stringer = ""
#    1.upto(5){
#       stringer += (65+rand(26)).chr
#    }
#    array << stringer
# }
# puts array.to_s