import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

import MainPage from './components/MainPage/MainPage'
import Post from './components/PostPage/Post'
import AllPostsPage from './components/AllPostsPage/AllPostsPage'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/markdown-github-blog/' component={MainPage} />
          <Route exact path='/markdown-github-blog/posts' component={AllPostsPage} />
          <Route exact path='/markdown-github-blog/404' component={PageNotFound}/>
          <Route path='/markdown-github-blog/:postname' component={Post}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App