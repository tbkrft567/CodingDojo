function pascalsTriangle(rows) {
   if (rows > 0) {
      arr = [1]
      start = 0
      for (row = 1; row < rows; row++) {
         start += row
         ending = start + row
         for (total = start; total <= ending; total++) {
            if (total == start || total == ending) {
               arr.push(1);
            }
            else {
               arr.push(arr[total - row - 1] + arr[total - row])
            }
         }
      }
      content = ""
      Value = 0
      for (row = 1; row <= rows; row++) {
         content += "\n<div class='row'>\n"
         for (current = 1; current <= row; current++) {
            content += "\n\t<div class='column'>" + arr[Value] + "</div>\n"
            Value++
         }
         content += "\n</div>\n"
      }
      document.getElementById("pascalsTriangle").innerHTML = content;
      return arr
   }
}
newArr = pascalsTriangle(10);
console.log(newArr)