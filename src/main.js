import React from 'react'
import { render } from 'react-dom'
import MyApp from './MyApp'
import NumberForm from './Lab2'


render(<MyApp />, document.getElementById('reactinjectedhere'))
render(<NumberForm />, document.getElementById('InputNumbers'))