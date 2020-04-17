import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { StoreProvider } from './Store'
//Add or import { Router, RouteComponentProps } from '@reach/router'
import { Router, RouteComponentProps } from '@reach/router'
import HomePage from './components/HomePage'
//import FavPage from './components/FavPage'
import FavPage from './components/FavPage'

//create RouterPage component
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

ReactDOM.render(
  <StoreProvider>
    {/* Wrap the RouterPage in Router  */}
    <Router>
      <RouterPage pageComponent={<HomePage />} path='/' />
      <RouterPage pageComponent={<FavPage />} path='/faves' />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)
