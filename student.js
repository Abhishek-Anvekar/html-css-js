
const findAverageGrade = (students)=>{
const totalGrade = students.reduce((acc,student)=>acc+student.grade,0)
const averageGrade = totalGrade/students.length
return averageGrade
}
const students = [{name: "Abhi", grade: 58},{name: "Ashish", grade: 70},{name: "Amith", grade: 50}]
const average = findAverageGrade(students)
console.log(average.toFixed(2))