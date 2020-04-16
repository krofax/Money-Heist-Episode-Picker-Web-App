import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { StoreProvider } from './Store'
import HomePage from './components/HomePage'

ReactDOM.render(
  <StoreProvider>
      <HomePage /> 
  </StoreProvider>,
  document.getElementById('root')
)
