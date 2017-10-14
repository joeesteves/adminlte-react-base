import React from 'react'
import Item from './tree-view-item'
export default (props) => (
  <li className={'treeview '.concat(props.active ? 'active' : '')}>
    <a href="#">
      <i className="fa fa-dashboard"></i> <span>{props.title}</span>
      <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul className="treeview-menu">
      {props.items.map(item => <Item {...item} /> )}
    </ul>
  </li>
)