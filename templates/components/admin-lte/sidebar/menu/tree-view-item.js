import React from 'react'
export default (props) => (
  <li className={props.active ? 'active' : ''}>
    <a href={props.href}>
      <i className={props.faClassName} /> {props.title}</a>
  </li>
)

// href, fa, title, active:bool