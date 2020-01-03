# # 1.
# 1.upto(255) { |i| print "#{i} \n" }

# # 2.
# array = (1..256).to_a
# array.each { |x| puts x if x.even? }

# # 3.
# sum = 0
# 1.upto(255) { |i| sum+=i }
# puts sum

# # 4.
# array = [1,3,4,7,9,13]
# array.each {|i| puts i}

# # 5.
# array = [1,3,4,7,9,13]
# max = array.max
# puts max

# # 6.
# sum = 0 
# array = [1,3,4,7,9,13]
# array.each { |i| sum+=i }
# avg = sum.to_f/array.size.to_f
# puts avg

# # 7.
# oddArray = []
# array = (1..256).to_a
# array.each { |x| oddArray << x if x.odd? }
# puts oddArray.to_s

# 8. 
# def greaterThanY(num)
#    # puts num
#    arr = [1,3,5,7]
#    newArr = []
#    arr.each { |num, i| puts i and num }
#    # puts newArr
# end

# greaterThanY(3)
# # puts newArray

# 9.
# array = [1,5,10,-2]
# def squareTheValue(arr)
#    # arr.each{ |i| arr << (i*i) }
#    newArray = arr.map { |i| i*i }
# end
# newArray = squareTheValue(array)
# puts newArray.to_s

# # 10.
# array = [1,5,10,-2]
# def squareTheValue(arr)
#    # arr.each{ |i| arr << (i*i) }
#    newArray = arr.map { 
#    |i|
#    if i < 0
#       0
#    else
#       i 
#    end
#     }
# end
# newArray = squareTheValue(array)
# puts newArray.to_s

# 11.
# array = [1,5,19,-2]
# def minMaxAvg(arr)
#    min = arr[0]
#    max = arr[0]
#    sum = 0
#    arr.each {
#    |i|
#    if i > max
#       max = i
#    end
#    if i < min
#       min = i
#    end
#    sum+=i
#    }
#    newArr = []
#    newArr << min
#    newArr << max
#    newArr << sum.to_f/arr.size.to_f
#    return newArr
# end
# newArray = minMaxAvg(array) 
# puts newArray

# 12.
# array = [1,5,10,7,-2]
# def shiftValues(arr)
#    arr.delete_at(0)
#    arr.push(0)
# end

# # newArray = 
# shiftValues(array)
# # puts newArray.to_s
# puts array.to_s

# .13
# array = [1,5,10,7,-2]
# def swapNeg(arr)
#    newArr = arr.map{
#       |i|
#       if i < 0
#          'Dojo'
#       else
#          i
#       end
#    }
#    return newArr
# end

# newArray =swapNeg(array)
# puts newArray

