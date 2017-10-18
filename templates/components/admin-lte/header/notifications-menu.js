import React from 'react'

export default (props) => (

  <li className="dropdown notifications-menu">
    <a href="" className="dropdown-toggle" data-toggle="dropdown">
      <i className="fa fa-bell-o"></i>
      <span className="label label-warning">10</span>
    </a>
    <ul className="dropdown-menu">
      <li className="header">You have 10 notifications</li>
      <li>

        <ul className="menu">
          <li>
            <a href="">
              <i className="fa fa-users text-aqua"></i><span> 5 new members joined today</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa fa-warning text-yellow"></i> <span>Very long description here that may not fit into the           page and may cause design problems </span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa fa-users text-red"></i><span> 5 new members joined</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa fa-shopping-cart text-green"></i><span> 25 sales made</span>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa fa-user text-red"></i> <span>You changed your username</span>
            </a>
          </li>
        </ul>
      </li>
      <li className="footer"><a href="">View all</a></li>
    </ul>
  </li>
)