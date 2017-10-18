import React, { Component } from 'react'
import Content from '../components/admin-lte/content'

export class WatchListContainer extends Component {

  render() {
    return (
      <Content header={{
        title: 'Watch List',
        subtitle: 'subtitle',
        breadcrumbs: [
          { title: 'Home', href: '#', faClassName: 'fa fa-dashboard' },
          { title: 'DashBoard', active: true }
        ]
      }} >
        <h1> HEllo Watch List </h1>
      </Content>
    )
  }
}