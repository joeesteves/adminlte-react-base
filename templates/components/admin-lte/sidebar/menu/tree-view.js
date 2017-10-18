import React from 'react'

export default (props) => (
  <li className={'treeview '.concat(props.active ? 'active' : '')}>
    <a href={props.href}>
      <i className={props.faClassName}></i> <span>{props.title}</span>
      {props.children}
    </a>
    <ul className="treeview-menu">
      {(props.items || []).map(Item)}
    </ul>
  </li>
)

const Item = (props, index) => (
  <li className={props.active ? 'active' : ''} key={index}>
    <a href={props.href}>
      <i className={props.faClassName} /> {props.title}</a>
  </li>
)
