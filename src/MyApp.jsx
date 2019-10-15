import React from 'react'
import AppTitle from './AppTitle'
import { render } from 'react-dom'

render(<AppTitle />, document.getElementById('ReactAppTitle'))
const MyApp = () => (
  <div>
    
    <h1>Minimal React KacperSlow</h1> 
    <p>Bundle size: 58 bytes, Load time of the bundle: 33 ms, Last commit SHA1: 789578f9292d927e88037898bcd274519ce4a3bf</p>

      <div>
        <button onClick={AllStudents}>All students</button>
        <button onClick={SortStudents}>Sort students</button>
        <button >Old students</button>
      </div> 
  </div>
)
const generateArray = (n) =>Array.from(Array(n), (x,index)=>index+1)
console.log(generateArray(30))

const generateRandomArray = (n) => Array.from(Array(n), (x,index)=>(Math.floor(Math.random() * Math.floor(25))+1))
console.log(generateRandomArray(10))

const array = [2, 56, 23, 88, 17, 4];
const Numbersgreaterthan15 = array.filter(array => array>15);
console.log(Numbersgreaterthan15)

const array2 = [2, 5, 8, 10];
const result =(numbers)=> numbers.map(number => number*number);
console.log(result(array2));

var data = [
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]
function AllStudents() {
  var studL=[]
  data.forEach(function(teachers){
    teachers.students.forEach(function(Student){
        studL.push(Student.name)
    })
  })
  document.getElementById("StudentsList").innerHTML = studL
}
function SortStudents() {
  var studL=[]
  data.forEach(function(teachers){
    teachers.students.forEach(function(Student){
      studL.push(Student.name)
    })
  })
  document.getElementById("StudentsList").innerHTML = studL.sort()
}



export default MyApp