import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const TreeView = (props) => (
  <li className={'treeview '.concat(new RegExp(props.href).test(props.actualPath) ? 'active' : '')}>
    <Link to={props.href}>
      <i className={props.faClassName}></i> <span style={{ marginLeft: '10px' }}>{props.title}</span>
      {props.children}
    </Link>
    <ul className="treeview-menu">
      {(props.items || []).map(Item)}
    </ul>
  </li>
)

const Item = (props, index) => (
  <li className={new RegExp(props.href).test(props.actualPath) ? 'active' : ''} key={index}>
    <Link to={props.href} >
      <i className={props.faClassName} /> {props.title}
    </Link>
  </li>
)

const mapStateToProps = (state) => ({
  actualPath: state.routing.locationBeforeTransitions.pathname
})

export default connect(mapStateToProps, null)(TreeView)