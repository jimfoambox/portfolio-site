import {render} from 'react-dom'
import React from 'react'
import Routes from './components/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Provider} from 'react-redux'
// import store from './store'

render(
//   <Provider store={store}>
    <Routes />,
//   </Provider>,
  document.getElementById('main')
)
