import React, { Component } from 'react'
import './globals/admin-lte-css.js'
import './globals/admin-lte'
import Header from './components/admin-lte/header'
import MainSideBar from './components/admin-lte/main-sidebar'
import ContentWrapper from './components/admin-lte/content'
import Footer from './components/admin-lte/footer'
import RightSideBar from './components/admin-lte/control-sidebar.js'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <MainSideBar />
        <ContentWrapper />
        <Footer />
        <RightSideBar />
      </div>
    );
  }
}

export default App;
