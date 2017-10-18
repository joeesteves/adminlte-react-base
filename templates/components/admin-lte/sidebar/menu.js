import React from 'react'
import TreeView from './menu/tree-view'
import MenuLink from './menu/link'

export default (props) => (
  <ul className="sidebar-menu" data-widget="tree">
    <SideBarButton>Complete Profile</SideBarButton>
    {/* Headers are usefull for dividing sidebar on sections */}
    <li className="header">TRADE</li>
    {/* DropDown TreeView with angle > when close and angle down when open. When active the option is hightlighted and dropdown deploy */}

    <MenuLink href='watch-list' title='WatchList' faClassName='fa fa-eye-slash fa-lg' />
    <MenuLink href='portfolio' title='Portfolio' faClassName='fa fa-pie-chart fa-lg' />
    <MenuLink href='feed' title='Feed' faClassName='fa fa-newspaper-o fa-lg' />

    <li className="header">DISCOVER{props.actualPath}</li>
    {/* SingleOption */}
    <MenuLink href='trade-markets' title="Trade Markets" faClassName='fa fa-line-chart fa-lg text-red' />
    <MenuLink href='copy-founds' title="Copy Founds" faClassName='fa fa-star-o fa-lg text-yellow' />
    <TreeView href='contact-us' title="Contact Us" items={[
      { title: 'Mail', faClassName: 'fa fa-envelope-o' },
      { title: 'Twitter', faClassName: 'fa fa-twitter' }
    ]} faClassName='fa fa-circle-o fa-lg text-aqua'>
      <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right"></i>
      </span>
    </TreeView>
    <hr style={{ borderColor: '#3A3D46' }} />
    <SideBarButton>Deposit Founds</SideBarButton>
  </ul>
)

const SideBarButton = (props) => (
  <button className="btn btn-large btn-info sidebar-form" style={{ width: '90%', margin: '5%' }}>
    {props.children}
  </button>
)

