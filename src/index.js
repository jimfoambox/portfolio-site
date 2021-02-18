import {render} from 'react-dom'
import React from 'react'
import Routes from './components/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles.css'

render(
  <Routes />,
  document.getElementById('main')
)
