//Challenge 1

let students = [
   { name: 'Remy', cohort: 'Jan' },
   { name: 'Genevieve', cohort: 'March' },
   { name: 'Chuck', cohort: 'Jan' },
   { name: 'Osmund', cohort: 'June' },
   { name: 'Nikki', cohort: 'June' },
   { name: 'Boris', cohort: 'June' }
];
newStr = "Challenge 1 \n"
for (i = 0; i < students.length; i++) {
   newStr += `   Name: ${students[i]["name"]}, Cohort: ${students[i]["cohort"]}\n`
}
console.log(newStr)

//Challenge 2

let users = {
   employees: [
      { 'first_name': 'Miguel', 'last_name': 'Jones' },
      { 'first_name': 'Ernie', 'last_name': 'Bertson' },
      { 'first_name': 'Nora', 'last_name': 'Lu' },
      { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
   ],
   managers: [
      { 'first_name': 'Lillian', 'last_name': 'Chambers' },
      { 'first_name': 'Gordon', 'last_name': 'Poe' }
   ]
};
newStr = "Challenge 2\n"
newStr += "   Employees\n"
for(i = 0; i < users["employees"].length; i++){
   fullName = `${users["employees"][i]["first_name"]}, ${users["employees"][i]["last_name"]}`  
   newStr += `     ${i+1} - ${users["employees"][i]["first_name"]}, ${users["employees"][i]["last_name"]} - ${fullName.length} \n`
}
newStr += "   Managers\n"
for(i = 0; i < users["managers"].length; i++){
   fullName = `${users["managers"][i]["first_name"]}, ${users["managers"][i]["last_name"]}`
   newStr += `     ${i+1} - ${users["managers"][i]["first_name"]}, ${users["managers"][i]["last_name"]} - ${fullName.length} \n`
}
console.log(newStr)