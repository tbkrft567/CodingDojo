function pascalsTriangle(rows){
   if(rows > 0){
      arr = [1]
      Si = 0
      for(Ri = 1; Ri < rows; Ri++){
         Si += Ri
         Ei = Si + Ri
         for(Ti = Si; Ti<=Ei; Ti++){
            if(Ti == Si || Ti == Ei){
               arr.push(1);
            }
            else{
               // console.log("firstIndex: ", Ti-Ri-1, "SecondIndex: ", Ti-Ri, "newTotal", arr[Ti-Ri-1]+arr[Ti-Ri])
               arr.push(arr[Ti-Ri-1]+arr[Ti-Ri])
            }
         }
      }
      content= ""
      indexValue = 0
         for(Ri = 1; Ri <= rows; Ri++){
            content += "\n<div class='row'>\n"
            for(Ci = 1; Ci <= Ri; Ci++){
               content += "\n\t<div class='column'>"+arr[indexValue]+"</div>\n"
               indexValue++
            }
            content += "\n</div>\n"
         }
         document.getElementById("pascalsTriangle").innerHTML = content;
      return arr
   }
}
newArr = pascalsTriangle(10);
console.log(newArr)