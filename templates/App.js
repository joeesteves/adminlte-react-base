import React, { Component } from 'react'
import './globals/admin-lte-css.js'
import './globals/admin-lte'
import Header from './components/admin-lte/header'
import MainSideBar from './components/admin-lte/main-sidebar'
// import ContentWrapper from './components/admin-lte/content'
import ContentDemo from './components/admin-lte/content-demo'
import { WatchListContainer } from './containers/watch-list-container'

import Footer from './components/admin-lte/footer'
import RightSideBar from './components/admin-lte/control-sidebar.js'


import { Provider } from 'react-redux'

import { Router, Route, Redirect } from 'react-router'
import { store, history } from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router history={history}>
          <Redirect from="/" to="/watch-list" /> 
          <Route path="/" component={Base}>
            <Route path="watch-list" component={WatchListContainer} />
            <Route path="portfolio" component={ContentDemo} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

class Base extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainSideBar />
        {this.props.children}
        <Footer />
        <RightSideBar />
        <div className="control-sidebar-bg"></div>
      </div>
    )
  }
}


// const Demo = () => (
//   <div className="content-wrapper" style={{ height: '500px' }}>
//     <h1 style={{ marginTop: 'auto' }} >Hello Routes</h1>
//   </div>)
export default App;
