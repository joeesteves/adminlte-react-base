import React from 'react'

export default (props) => (
  <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
    {props.items.map(Item)}
  </ul>
)

const Item = (props, index) => (
  <li key={index}>
    <a href={props.href} data-toggle="tab"><i className={props.faClassName}></i>
    </a>
  </li>) 