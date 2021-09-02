import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

// static
import './global.css'

// components
import App from './components/App'

const container = document.getElementById('app')

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container)
