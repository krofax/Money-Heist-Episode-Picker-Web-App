import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { StoreProvider } from './Store'
import { Router, RouteComponentProps } from '@reach/router'
import HomePage from './components/HomePage'
import FavPage from './components/FavPage'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent

ReactDOM.render(
  <StoreProvider>
    <Router>
      <RouterPage pageComponent={<HomePage />} path='/' />
      <RouterPage pageComponent={<FavPage />} path='/faves' />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
)
