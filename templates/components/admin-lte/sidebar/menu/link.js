import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const MenuLink = (props) => (
  <li className={new RegExp(props.href).test(props.actualPath) ? 'active' : ''}>
    <Link to={props.href}>
      <i className={props.faClassName}></i> <span style={{ marginLeft: '10px' }}>{props.title}</span>
    </Link>
  </li>
)
const mapStateToProps = (state) => ({
  actualPath: state.routing.locationBeforeTransitions.pathname
})

export default connect(mapStateToProps, null)(MenuLink)