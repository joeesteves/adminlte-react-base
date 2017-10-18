import React from 'react'
import TreeView from './menu/tree-view'
export default () => (
  <ul className="sidebar-menu" data-widget="tree">
    {/* Headers are usefull for dividing sidebar on sections */}
    <li className="header">MAIN NAVIGATION</li>
    {/* DropDown TreeView with angle > when close and angle down when open. When active the option is hightlighted and dropdown deploy */}
    <TreeView active={true} title="DashBoard" items={[
      { title: 'Dashboard v1', href: 'index.html', faClassName: 'fa fa-circle-o', active: true },
      { title: 'Dashboard v2', href: 'index2.html', faClassName: 'fa fa-circle-o', active: false }
    ]} faClassName='fa fa-dashboard'>
      <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right"></i>
      </span>
    </TreeView>
    {/* DropDown TreeView with badge instead of angle*/}
    <TreeView active={false} title="Layout Options" items={[
      { title: 'Top Navigation', href: 'index.html', faClassName: 'fa fa-circle-o', active: false },
      { title: 'Boxed', href: 'index2.html', faClassName: 'fa fa-circle-o', active: false }
    ]} faClassName='fa fa-files-o'>
      <span className="pull-right-container">
        <span className="label label-primary pull-right">4</span>
      </span>
    </TreeView>
    <TreeView active={false} title="Widgets" faClassName='fa fa-th'>
      <small className="label pull-right bg-green">new</small>
    </TreeView>
    <TreeView active={false} title="Mailbox" faClassName='fa fa-envelope' href='#'>
      <span className="pull-right-container">
        <small className="label pull-right bg-yellow">12</small>
        <small className="label pull-right bg-green">16</small>
        <small className="label pull-right bg-red">5</small>
      </span>
    </TreeView>

    <li className="header">LABELS</li>
    {/* SingleOption */}
    <TreeView active={false} title="Important" faClassName='fa fa-circle-o text-red' href='#' />
    <TreeView active={false} title="Warning" faClassName='fa fa-circle-o text-yellow' href='#' />
    <TreeView active={false} title="Information" faClassName='fa fa-circle-o text-aqua' href='#' />
  </ul>
)