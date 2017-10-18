import React from 'react'
export default () => (
  <div className="user-panel">
    <div className="pull-left image">
      <img src={require("admin-lte/dist/img/user2-160x160.jpg")} className="img-circle" alt="User" />
    </div>
    <div className="pull-left info">
      <p>Pedro Gómez</p>
      <a href=""><i className="fa fa-circle text-success"></i> Online</a>
    </div>
  </div>)
