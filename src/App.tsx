import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

import MainPage from './components/MainPage/MainPage'
import Post from './components/PostPage/Post'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/:postname' component={Post}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App