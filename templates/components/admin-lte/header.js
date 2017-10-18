import React from 'react'
import Logo from './header/logo'
import MessagesMenu from './header/messages-menu'
import NotificationsMenu from './header/notifications-menu'
import TasksMenu from './header/tasks-menu'
import UserMenu from './header/user-menu'
// import SearchBar from './header/search-bar'


export default () => (
  <header className="main-header">
    <a href="index2.html" className="logo">
      <Logo mode="mini"> <b>I</b>EB </Logo>
      <Logo mode="maxi"> <b>Broker</b>Digital</Logo>
    </a>

    <nav className="navbar navbar-static-top">

      <a href="" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      {/* <SearchBar /> */}

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

          <MessagesMenu />
          <NotificationsMenu />
          <TasksMenu />
          <UserMenu />
          <li>
            <a href="" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>)

