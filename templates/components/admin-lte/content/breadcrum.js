import React from 'react'


export default (props) => (
  <ol className="breadcrumb">
    {props.items.map(Item)}
  </ol>
)
const Item = (props, index) => (
  < li className={props.active ? 'active' : ''} key={index} >
    {
      props.href ?
        <a href={props.href}>
          <i className={props.faClassName}></i>{props.title}
        </a> : <span>{props.title}</span>
    }
  </li>
)