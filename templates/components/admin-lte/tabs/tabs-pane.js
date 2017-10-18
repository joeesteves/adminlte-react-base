// "control-sidebar-home-tab"
// 
import React from 'react'
export default (props) => (
  <div className="tab-pane" id={props.id} key={props.is}>
    {props.children}
  </div>
)