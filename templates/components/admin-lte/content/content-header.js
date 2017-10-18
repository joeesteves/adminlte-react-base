import React from 'react'
import Breadcrumb from './breadcrum'
export default (props) => (
  <section className="content-header">
    <h1>
      {props.title} <small>{props.subtitle}</small>
    </h1>
    <Breadcrumb items={props.breadcrumbs} />
  </section>

)