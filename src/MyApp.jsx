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
export default MyApp