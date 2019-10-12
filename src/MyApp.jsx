import React from 'react'
import AppTitle from './AppTitle'
import { render } from 'react-dom'

render(<AppTitle />, document.getElementById('ReactAppTitle'))
const MyApp = () => (
  <div>
    <h1>Minimal React KacperSlow</h1> 
    <p>Bundle size: 58 bytes, Load time of the bundle: 33 ms, Last commit SHA1: 789578f9292d927e88037898bcd274519ce4a3bf</p>
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

export default MyApp