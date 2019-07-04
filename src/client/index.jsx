import ReactDOM from 'react-dom'
import React from 'react'

import App from './components/App'

import './styles/reset.scss' // importing reset
import './styles/index.scss' // importing global styles

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef
}

// Here should start the React APP
ReactDOM.render(<App />, document.getElementById('root'))
