import React from 'react'
import ContentHeader from './content/content-header'

export default (props) => (
  <div className="content-wrapper">
    <ContentHeader title={props.header.title} subtitle={props.header.subtitle} breadcrumbs={props.header.breadcrumbs} />
    <section className="content">
      {props.children}
    </section>
  </div>
)