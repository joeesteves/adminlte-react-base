import React from 'react'
export default (props) => (
  <div className="col-lg-3 col-xs-6">
    <div className={'small-box '.concat(props.color)}>
      {props.children}
    </div>
  </div>)

// USE EXAMPLE
// <SmallBox color="bg-red">
// <div className="inner">
//   <h3>65</h3>

//   <p>Unique Visitors</p>
// </div>
// <div className="icon">
//   <i className="ion ion-pie-graph"></i>
// </div>
// <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
// </SmallBox>