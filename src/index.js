import {render} from 'react-dom'
import React from 'react'
// import {Provider} from 'react-redux'
// import store from './store'
import Routes from './components/Routes'

render(
//   <Provider store={store}>
    <Routes />,
//   </Provider>,
  document.getElementById('main')
)
